# ゲーム紹介サイト

個人開発ゲームの紹介サイト(Astro製)。

- 本番サイト: https://akao-game.com/
- 共有リポジトリ: https://github.com/akaogamedev/game-site
- 本番ブランチ: `main`（PushするとCloudflare Pagesが自動公開）
- [Windows・Macでのセットアップと更新手順](docs/cross-platform-workflow.md)

## 開発

```bash
npm ci            # 初回・依存パッケージの更新を取得したとき
npm run dev       # 開発サーバー起動 → http://localhost:4321
npm run build     # 本番ビルド(dist/ に出力)
```

## ゲームを追加・編集する

`src/content/games/` にMarkdownファイルを1つ作るだけで、トップページの一覧と詳細ページが自動で生成されます。

```markdown
---
title: ゲームのタイトル
catch: 一言キャッチコピー
category: unityroom        # ios または unityroom
unityroomNo: 7             # 100本投稿企画の何本目か(unityroomのみ)
genre: アクション
platforms: [unityroom]
releaseDate: 2026-01-01
color: "#274b8f"           # カードやページのアクセントカラー
cover: /images/games/xxx/cover.png
screenshots:
  - /images/games/xxx/shot1.png
links:
  - label: unityroomで遊ぶ
    url: https://unityroom.com/games/xxxxx
---

ここにゲームの紹介文をMarkdownで自由に書けます。
```

画像は `public/images/games/<ゲーム名>/` に置いてください。

カバー画像(とプレイ動画)を置いたら、一覧用の軽量画像・カードのホバー再生用クリップ・詳細ページのスクリーンショットを作ります(ffmpegが必要)。

```bash
node tools/rich-media.cjs <スラッグ>   # 例: node tools/rich-media.cjs tsukkomi-dojo
```

`card.webp`(カバーと同じフォルダ)と、動画フォルダの `preview.mp4`・`still-1〜3.webp` ができます。静止画は動画の20%・50%・80%地点から切り出し、確認用の一覧画像を `artifacts/rich-media-20260926/<スラッグ>-stills.jpg` に保存します。見栄えが悪いコマに当たったら、スクリプト冒頭の `stillAt` に位置を足して作り直してください。ファイルが無いゲームは、カバー画像だけで今まで通り表示されます。

開発者ページの「ぼうけんのきろく」「じっせき」は、公開済みゲームの本数・公開日・ジャンルから自動で更新されます。

- `category: unityroom` のゲームは「unityroom 100本投稿企画」セクションに表示され、
  その件数がトップページの進捗バー(◯/100本)に自動で反映されます。
- `category: ios` のゲームは「iOSアプリ」セクションに表示されます。

## 自分の情報に書き換える箇所

- `src/layouts/BaseLayout.astro` — サイト名(`siteName`)とXのURL(`xUrl`)
- `src/pages/index.astro` — ヒーローのキャッチコピーとXのURL(`xUrl`)
- `src/pages/about.astro` — プロフィールと各種リンク

## 公開(デプロイ)

Cloudflare Pagesの既存プロジェクト `game-site` が、GitHubの `main` ブランチを監視しています。ビルドコマンドは `npm run build`、出力ディレクトリは `dist` です。

公開前に `npm run build` で確認し、公開する変更だけをコミットして `main` にPushします。未公開の作業を別のPCへ渡す場合は作業ブランチにPushしてください。詳しい手順は [Windows・Macでの作業手順](docs/cross-platform-workflow.md) を参照してください。
