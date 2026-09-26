// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Numphabet は開発中ページ(/dev/numphabet/)から通常のゲームページへ移った(2026-09-22 配信)。
// 旧URLは各言語のゲームページへ転送する(静的出力ではリダイレクト用のHTMLが生成される)
const localePrefixes = ["", "/en", "/zh-cn", "/zh-tw", "/ko", "/es", "/fr", "/de", "/pt-br"];
const redirects = Object.fromEntries(
	localePrefixes.map((prefix) => [`${prefix}/dev/numphabet`, `${prefix}/games/numphabet/`]),
);

// https://astro.build/config
export default defineConfig({
	redirects,
  // 別ポートで開発サーバーを立てたいときは PORT 環境変数で指定できる
  server: { port: Number(process.env.PORT) || 4321 },
	site: "https://akao-game.com",
	integrations: [
		sitemap({
			filter: (page) => !/\/404\/?$/.test(new URL(page).pathname),
		}),
	],
});
