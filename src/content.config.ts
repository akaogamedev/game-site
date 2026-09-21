import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const gameSchema = z.object({
  title: z.string(),
  catch: z.string(),
  category: z.enum(["ios", "unityroom"]),
  unityroomNo: z.number().optional(),
  genre: z.string(),
  platforms: z.array(z.string()),
  releaseDate: z.coerce.date(),
  color: z.string().default("#ff6b9d"),
  cover: z.string(),
  icon: z.string().optional(),
  screenshots: z.array(z.string()).default([]),
  /** 詳細ページの劇場に流すプレイ動画(無音ループ前提)。無ければ cover を表示 */
  video: z.string().optional(),
  videoPoster: z.string().optional(),
  /** 詳細ページの帯に薄く敷くドット絵タイル(SVG)。無ければ共通の菱形模様 */
  bgTile: z.string().optional(),
  links: z
    .array(z.object({ label: z.string(), url: z.string().url() }))
    .default([]),
  dialogue: z
    .array(
      z.object({
        speaker: z.enum(["akao", "onaga"]),
        text: z.string(),
      }),
    )
    .default([]),
  featured: z.boolean().default(false),
});

const games = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/games" }),
  schema: gameSchema,
});

const gamesEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/games-en" }),
  schema: gameSchema,
});

export const collections = { games, gamesEn };
