// tools/rich-media.cjs が作る派生素材(一覧用の軽量画像・ホバー用クリップ・ギャラリー静止画)を探す。
// 素材が無いゲームは元のカバー画像だけで表示し、クリップやギャラリーは出さない
import fs from "node:fs";
import path from "node:path";

interface MediaSource {
  cover: string;
  video?: string;
}

export interface GameMedia {
  /** 一覧カード用(16:9に切り抜いたWebP)。無ければ cover */
  card: string;
  /** カードにホバーしたとき流す短い無音クリップ */
  preview?: string;
  /** 詳細ページのギャラリーに並べる静止画 */
  stills: string[];
}

const exists = (publicPath: string) =>
  fs.existsSync(path.join(process.cwd(), "public", publicPath));

const cache = new Map<string, GameMedia>();

export function gameMedia({ cover, video }: MediaSource): GameMedia {
  const key = `${cover}|${video ?? ""}`;
  const cached = cache.get(key);
  if (cached) return cached;

  const card = `${path.posix.dirname(cover)}/card.webp`;
  const videoDir = video ? path.posix.dirname(video) : undefined;
  const preview = videoDir ? `${videoDir}/preview.mp4` : undefined;
  const stills = videoDir
    ? [1, 2, 3].map((n) => `${videoDir}/still-${n}.webp`).filter(exists)
    : [];

  const media: GameMedia = {
    card: exists(card) ? card : cover,
    preview: preview && exists(preview) ? preview : undefined,
    stills,
  };
  cache.set(key, media);
  return media;
}
