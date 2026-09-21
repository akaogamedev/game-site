# Windows・Macでの作業手順

GitHubの `akaogamedev/game-site` を共有元にします。各PCには独立した作業フォルダとローカルサーバーを用意します。片方のPCを起動しておく必要はありません。

## 初回の準備

1. Git、Node.js 24.13.0（`.nvmrc` に記録）、普段使うエディタを用意します。
2. GitHubへのPushには、このリポジトリに書き込みできるアカウントでの認証が必要です。GitHub Desktopを使う場合は、そのアカウントでサインインしてリポジトリをCloneできます。
3. Macのターミナルで以下を実行します。保存先はホーム直下の `Projects/game-site` です。

```bash
mkdir -p ~/Projects
cd ~/Projects
git clone https://github.com/akaogamedev/game-site.git
cd game-site
git config --local pull.ff only
npm ci
npm run dev
```

ブラウザで http://localhost:4321/ を開きます。停止はターミナルで `Ctrl+C` です。

すでにnvmを使っているMacでは、プロジェクトのフォルダ内で `nvm install`、`nvm use` を実行すると `.nvmrc` のバージョンを使用できます。Gitが未導入のMacでCommand Line Toolsのインストールを求められた場合は、案内に従って準備してください。

Windowsの通常の編集フォルダは `C:\Users\kakkokari\game-site-main\game-site-main` です。2026年9月22日にGitHubの `origin/main` と連携しました。以前の `.publish-20260922` フォルダからコピーする必要はありません。

`node_modules`、`dist`、`.astro` はPCごとに生成します。これらをWindowsからMacへコピーしないでください。`package-lock.json` は共有し、両方で `npm ci` を使います。

## 作業を始める

まず、前回の未保存の変更がないか確認します。

```bash
git status
git switch main
git pull --ff-only origin main
```

未コミットの変更がある場合は、内容を確認して現在の作業ブランチにコミットしてから切り替えます。競合や分岐のエラーが出た場合は、強制Pushや変更破棄をせず内容を確認してください。

初回や `package-lock.json` が更新されたときは `npm ci` を実行します。通常のプレビューは `npm run dev` です。

## 下書きを別のPCに渡す

本番に出す前の作業は、作業ブランチに保存します。以下の `work/site-update` は例です。新しい作業では内容に合った別名を使用できます。

```bash
git switch -c work/site-update
# 編集する
git diff
git add -- src public
git commit -m "Update game introductions"
git push -u origin work/site-update
```

`git add` には変更したファイルやフォルダを指定します。上の例はサイトの本文・画面・画像・動画を対象にしています。設定や手順書も変更した場合は、内容を確認して個別に追加してください。

もう一方のPCでは、変更をコミットして作業フォルダを整理してから取得します。

```bash
git fetch origin
git switch --track origin/work/site-update
npm ci
npm run dev
```

すでに同名のローカルブランチがある場合は、`git switch work/site-update` と `git pull --ff-only` を使います。

作業ブランチへのPushは本番サイトの更新にはなりません。ただしCloudflare Pagesの設定によっては、別のプレビューURLが自動作成されます。パスワードやAPIキーなどはブランチを問わずコミットしないでください。

## 本番サイトに公開する

作業ブランチで画面とビルドを確認します。

```bash
npm run build
git status
```

公開する変更がすべてコミットされていることを確認し、`main` に取り込みます。

```bash
git switch main
git pull --ff-only origin main
git merge --ff-only work/site-update
git push origin main
```

`--ff-only` が失敗する場合は、ほかの変更が進んでいます。最新の `main` と作業ブランチの内容を確認・統合して、再度ビルドしてください。

Cloudflare Pagesの `game-site` でデプロイ成功を確認し、https://akao-game.com/ で公開内容を確認します。普段のGit経由の公開に、各PCでのWrangler認証は必要ありません。

## 編集場所

| 内容 | フォルダ・ファイル |
| --- | --- |
| 日本語のゲーム情報・紹介会話 | `src/content/games/` |
| 英語のゲーム情報・紹介会話 | `src/content/games-en/` |
| その他の言語のゲーム情報 | `src/i18n/games/` |
| 共通UIの文言 | `src/i18n/ui.ts` |
| 画面の構成 | `src/components/`、`src/pages/` |
| デザイン | `src/styles/global.css` |
| 公開する画像 | `public/images/` |
| 公開する動画 | `public/videos/` |

ゲーム追加時は既存作品の形式に合わせ、必要な画像・動画と言語データを追加します。`public` 内の完成済み素材はGitHubから取得できます。Unityの元プロジェクトや作業用の録画素材はこのリポジトリには含まれないため、再撮影やゲーム自体の変更には別途そのプロジェクトが必要です。
