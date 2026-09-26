import type { Locale } from "./config";

// ゲーム詳細ページの <title> と meta description を組み立てる。
// ゲーム名だけでは名前を知っている人しか検索で辿り着けないので、
// ジャンルと「無料ブラウザゲーム / iPhoneアプリ」を添えて、特徴を説明文に足す

type Category = "unityroom" | "ios";

interface SeoCopy {
  /** タイトル末尾の分類 */
  kind: Record<Category, string>;
  /** 説明文の最後に付ける一文 */
  where: Record<Category, string>;
  /** 文の終わりに句点が無ければ足す */
  period: string;
}

const seoCopy: Record<Locale, SeoCopy> = {
  ja: {
    kind: { unityroom: "無料ブラウザゲーム", ios: "iPhoneアプリ" },
    where: {
      unityroom: "unityroomでインストール不要・無料で遊べます。",
      ios: "App Storeで配信中。",
    },
    period: "。",
  },
  en: {
    kind: { unityroom: "Free Browser Game", ios: "iPhone App" },
    where: {
      unityroom: "Play free in your browser on unityroom, no download needed.",
      ios: "Available on the App Store.",
    },
    period: ".",
  },
  "zh-cn": {
    kind: { unityroom: "免费网页游戏", ios: "iPhone 应用" },
    where: {
      unityroom: "在 unityroom 上免安装、免费游玩。",
      ios: "已在 App Store 上架。",
    },
    period: "。",
  },
  "zh-tw": {
    kind: { unityroom: "免費網頁遊戲", ios: "iPhone App" },
    where: {
      unityroom: "在 unityroom 上免安裝、免費遊玩。",
      ios: "已在 App Store 上架。",
    },
    period: "。",
  },
  ko: {
    kind: { unityroom: "무료 브라우저 게임", ios: "iPhone 앱" },
    where: {
      unityroom: "unityroom에서 설치 없이 무료로 플레이할 수 있습니다.",
      ios: "App Store에서 배포 중입니다.",
    },
    period: ".",
  },
  es: {
    kind: { unityroom: "Juego de navegador gratis", ios: "App para iPhone" },
    where: {
      unityroom: "Juega gratis en el navegador en unityroom, sin descargas.",
      ios: "Disponible en la App Store.",
    },
    period: ".",
  },
  fr: {
    kind: { unityroom: "Jeu gratuit sur navigateur", ios: "App iPhone" },
    where: {
      unityroom: "Jouez gratuitement dans le navigateur sur unityroom, sans téléchargement.",
      ios: "Disponible sur l'App Store.",
    },
    period: ".",
  },
  de: {
    kind: { unityroom: "Kostenloses Browserspiel", ios: "iPhone-App" },
    where: {
      unityroom: "Kostenlos im Browser auf unityroom spielbar, ohne Download.",
      ios: "Im App Store erhältlich.",
    },
    period: ".",
  },
  "pt-br": {
    kind: { unityroom: "Jogo de navegador grátis", ios: "App para iPhone" },
    where: {
      unityroom: "Jogue grátis no navegador na unityroom, sem download.",
      ios: "Disponível na App Store.",
    },
    period: ".",
  },
};

const endsWithPunctuation = (text: string) => /[。．.!！?？]$/.test(text.trim());

/** Markdown本文の「## 特徴」「## Features」の箇条書きを取り出す(ja・en用) */
export function featuresFromBody(body: string | undefined): string[] {
  if (!body) return [];
  const section = body.split(/^## /m).find((part) => /^(特徴|Features)\s*$/m.test(part.split("\n")[0]));
  if (!section) return [];
  return section
    .split("\n")
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());
}

interface GameSeoInput {
  locale: Locale;
  category: Category;
  title: string;
  genre: string;
  catchCopy: string;
  features: string[];
}

export function gameSeo({ locale, category, title, genre, catchCopy, features }: GameSeoInput) {
  const copy = seoCopy[locale];
  // 日本語・中国語は全角カッコで詰め、それ以外は半角カッコとスペース
  const cjk = ["ja", "zh-cn", "zh-tw"].includes(locale);
  const seoTitle = cjk
    ? `${title}（${genre}）- ${copy.kind[category]}`
    : `${title} (${genre}) - ${copy.kind[category]}`;
  const sentence = (text: string) => (endsWithPunctuation(text) ? text.trim() : `${text.trim()}${copy.period}`);
  const space = cjk ? "" : " ";
  const description = [sentence(catchCopy), ...features.slice(0, 3).map(sentence), copy.where[category]].join(space);
  return { title: seoTitle, description };
}
