// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 別ポートで開発サーバーを立てたいときは PORT 環境変数で指定できる
  server: { port: Number(process.env.PORT) || 4321 },
	site: "https://akao-game.com",
	integrations: [
		sitemap({
			filter: (page) => !/\/404\/?$/.test(new URL(page).pathname),
		}),
	],
});
