// 一覧カード用の軽量画像(card.webp)・ホバー再生用の短いクリップ(preview.mp4)・
// 詳細ページのギャラリー用静止画(still-1〜3.webp)を、既存のカバー画像とプレイ動画から作る。
// 使い方: node tools/rich-media.cjs [slug ...]   (省略時は全ゲーム。既存ファイルは上書き)
// 必要なもの: ffmpeg / ffprobe(PATH上)、sharp(astroの依存で入っている)
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const sharp = require('sharp');

const run = (cmd, args) => execFileSync(cmd, args, { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024, windowsHide: true });
const duration = (file) => Number(run('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file]));
const qa = path.resolve('artifacts/rich-media-20260926');

// 静止画を切り出す位置(動画の長さに対する割合)。見栄えの悪いコマに当たったゲームだけ上書きする
const stillAt = {
  default: [0.2, 0.5, 0.8],
  // 2026-09-26 目視で選び直し(何も置いていない地面・空白の芝生・同じ結果画面の連続を避ける)
  'castle-pazzle': [0.05, 0.55, 0.75],
  'mitomano-1mm': [0.25, 0.45, 0.85],
  'pittari-hitofudegaki': [0.05, 0.25, 0.95],
};
// プレビューの開始位置(割合)。短い動画(8秒以下)は頭から全部使う
const previewFrom = {
  default: 0.2,
  'castle-pazzle': 0.4,
};

const frontmatter = (slug) => {
  const text = fs.readFileSync(path.join('src/content/games', slug + '.md'), 'utf8');
  const field = (name) => text.match(new RegExp(`^${name}:\\s*(\\S+)`, 'm'))?.[1];
  return { cover: field('cover'), video: field('video') };
};

async function cardImage(slug, cover) {
  const src = path.join('public', cover);
  const out = path.join(path.dirname(src), 'card.webp');
  const { width, height } = await sharp(src).metadata();
  // 一覧カードは16:9で中央を切り取って見せている(object-fit: cover)ので、先に同じ形に切る
  const w = Math.min(width, 720);
  const h = Math.round((w * 9) / 16);
  await sharp(src).resize(w, h, { fit: 'cover', position: 'centre' }).webp({ quality: 80 }).toFile(out);
  return { out, w, h, from: fs.statSync(src).size, to: fs.statSync(out).size };
}

function preview(slug, video) {
  const src = path.join('public', video);
  const out = path.join(path.dirname(src), 'preview.mp4');
  const len = duration(src);
  const clip = Math.min(6, len);
  const start = len <= 8 ? 0 : len * (previewFrom[slug] ?? previewFrom.default);
  run('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-ss', start.toFixed(2), '-i', src, '-t', String(clip), '-an',
    '-vf', 'scale=640:-2:flags=lanczos,crop=640:360,fps=24',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '30', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-y', out,
  ]);
  return { out, to: fs.statSync(out).size };
}

async function stills(slug, video) {
  const src = path.join('public', video);
  const dir = path.dirname(src);
  const len = duration(src);
  const tmp = path.join(qa, slug);
  fs.mkdirSync(tmp, { recursive: true });
  const files = [];
  for (const [i, f] of (stillAt[slug] ?? stillAt.default).entries()) {
    const raw = path.join(tmp, `still-${i + 1}.png`);
    run('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-ss', (len * f).toFixed(2), '-i', src, '-frames:v', '1', '-y', raw]);
    const out = path.join(dir, `still-${i + 1}.webp`);
    await sharp(raw).resize({ width: 960, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
    files.push(out);
  }
  // 目視確認用の一覧画像
  const thumbs = await Promise.all(files.map((f) => sharp(f).resize(400, 250, { fit: 'contain', background: '#17171c' }).toBuffer()));
  await sharp({ create: { width: 1200, height: 250, channels: 3, background: '#17171c' } })
    .composite(thumbs.map((input, i) => ({ input, left: i * 400, top: 0 })))
    .jpeg({ quality: 85 })
    .toFile(path.join(qa, `${slug}-stills.jpg`));
  return files;
}

async function main() {
  fs.mkdirSync(qa, { recursive: true });
  const only = process.argv.slice(2);
  const slugs = fs.readdirSync('src/content/games').filter((n) => n.endsWith('.md')).map((n) => n.slice(0, -3));
  for (const slug of slugs) {
    if (only.length && !only.includes(slug)) continue;
    const { cover, video } = frontmatter(slug);
    const card = await cardImage(slug, cover);
    let line = `${slug}: card ${card.w}x${card.h} ${(card.from / 1024).toFixed(0)}KB -> ${(card.to / 1024).toFixed(0)}KB`;
    if (video) {
      const p = preview(slug, video);
      await stills(slug, video);
      line += `, preview ${(p.to / 1024).toFixed(0)}KB, stills 3`;
    }
    console.log(line);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
