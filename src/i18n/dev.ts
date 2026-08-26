import type { Locale } from "./config";
import type { DialogueLine } from "./game";

/** スクショの説明文は枚数を固定し、翻訳漏れを型で防ぐ */
type ShotLabels = readonly [string, string, string, string, string];

export interface DevMode {
  name: string;
  text: string;
}

export interface DevCopy {
  /** トップページの「開発中」セクション */
  homeTitle: string;
  homeLead: string;
  homeButton: string;
  /** 「開発中」バッジ */
  status: string;
  catch: string;
  genre: string;
  platform: string;
  lead: string;
  dialogue: DialogueLine[];
  features: string[];
  modesHeading: string;
  modes: DevMode[];
  statusLabel: string;
  statusValue: string;
  releaseLabel: string;
  releaseValue: string;
  languageLabel: string;
  languageValue: string;
  follow: string;
  shots: ShotLabels;
  note: string;
}

export const devTitle = "Numphabet";
export const devSlug = "numphabet";
export const devPath = "/dev/numphabet/";
/** Paper Lab テーマのミント。ゲーム側のアクセントカラーに合わせている */
export const devColor = "#10a06a";
export const devCover = "/images/dev/numphabet/cover.jpg";
/** リリース前の仮アイコン。ストア提出までに差し替える */
export const devIcon = "/images/dev/numphabet/icon.png";

export const devScreenshots: readonly string[] = [
  "/images/dev/numphabet/home.jpg",
  "/images/dev/numphabet/board.jpg",
  "/images/dev/numphabet/result.jpg",
  "/images/dev/numphabet/collection.jpg",
  "/images/dev/numphabet/leaderboard.jpg",
];

export const devCopy: Record<Locale, DevCopy> = {
  ja: {
    homeTitle: "開発中",
    homeLead:
      "いま作っているゲーム。リリースはまだ先ですが、進捗をのぞいていってください。",
    homeButton: "開発中のゲームを見る",
    status: "開発中",
    catch: "数字で、ことばを解け。",
    genre: "ワードパズル",
    platform: "iOS",
    lead: "A=1、B=2、…Z=26。画面に出た英単語を、その文字になる数字カードを左から順にタップして完成させる、60秒のスピードパズルです。iOS向けに開発中で、App Storeでの配信を目指しています。",
    dialogue: [
      { speaker: "onaga", text: "Numphabet…?これ、なんて読むん?" },
      {
        speaker: "akao",
        text: "「ナンファベット」。numberとalphabetを合わせた造語だよ。A=1、B=2…Z=26の対応で、出てきた英単語を数字カードで作っていくパズル。",
      },
      {
        speaker: "onaga",
        text: "ほな「CAT」やったら3、1、20をタップするだけ?ぬるいやん。",
      },
      {
        speaker: "akao",
        text: "それが、盤面には必要な枚数より多くカードが並んでるんだ。しかも「9+5」みたいに計算してから文字になるカードや、Z↔Aでアルファベットを逆から数えるカードもある。",
      },
      {
        speaker: "onaga",
        text: "逆から!?ほな「1」が「Z」になるんか。頭こんがらがるわ…",
      },
      {
        speaker: "akao",
        text: "両方かかったカードまであるよ。だから本当に難しいのは計算じゃなくて、正しい1枚を見つけること。まだ開発中だから、進捗はXで流していくね。",
      },
    ],
    features: [
      "A=1 … Z=26。英単語を、その文字になる数字カードで左から順に完成させる",
      "「9+5」で計算してから文字になるカード、Z↔Aでアルファベットを逆から数えるカード、その両方がかかったカード",
      "盤面には必ず4枚以上のダミーが混ざる。半分以上は正解の±1〜2で、ぱっと見では区別できない",
      "1プレイ60秒。難易度はEASY / NORMAL / HARDの3段階",
    ],
    modesHeading: "モード",
    modes: [
      {
        name: "スコアアタック",
        text: "60秒でどこまで解けるか。EASY / NORMAL / HARDそれぞれにベストとランキングがあります。",
      },
      {
        name: "デイリーチャレンジ",
        text: "全員が同じ5問。毎日0時(UTC)に更新され、何度でも遊べます。",
      },
      {
        name: "ランクマッチ",
        text: "1対1で同じ盤面を早解き、5点先取。今後のビルドで登場予定です。",
      },
    ],
    statusLabel: "現在の状況",
    statusValue: "開発中(ストア提出の準備中)",
    releaseLabel: "配信予定",
    releaseValue: "未定",
    languageLabel: "対応言語",
    languageValue: "日本語 / 英語",
    follow: "開発の進捗をXで見る",
    shots: [
      "ホーム画面",
      "HARDの盤面(20枚)",
      "リザルト画面",
      "テーマのコレクション",
      "ランキング",
    ],
    note: "このページは開発中のゲームを紹介するものです。アイコンやスクリーンショット、仕様は、リリースまでに変わることがあります。",
  },
  en: {
    homeTitle: "In development",
    homeLead:
      "What I am building right now. It is not out yet, but here is how far it has come.",
    homeButton: "See what I am building",
    status: "In development",
    catch: "Read the word. Think in numbers.",
    genre: "Word puzzle",
    platform: "iOS",
    lead: "A=1, B=2, … Z=26. A word appears, and you complete it by tapping the number cards that become its letters, left to right, in 60 seconds. In development for iOS, heading for the App Store.",
    dialogue: [
      { speaker: "onaga", text: "Numphabet? How do you even say that?" },
      {
        speaker: "akao",
        text: "Num-phabet — number plus alphabet. A=1, B=2, all the way to Z=26. A word shows up and you build it out of number cards.",
      },
      {
        speaker: "onaga",
        text: "So for CAT I just tap 3, 1 and 20? That sounds easy.",
      },
      {
        speaker: "akao",
        text: "The board always holds more cards than the word needs. And some cards do the arithmetic first, like 9+5. Others count the alphabet backwards — Z↔A.",
      },
      {
        speaker: "onaga",
        text: "Backwards? So 1 becomes Z? My head hurts already.",
      },
      {
        speaker: "akao",
        text: "Some cards do both at once. The hard part is never the arithmetic — it is finding the one right card. Still building it, and I post the progress on X.",
      },
    ],
    features: [
      "A=1 … Z=26. Complete each word with the number cards that become its letters, left to right.",
      "Cards that do the arithmetic first (9+5), cards that run the alphabet backwards (Z↔A), and cards that do both.",
      "Every board carries at least four decoys, and most of them sit within one or two of a real answer — you cannot spot them at a glance.",
      "60 seconds a run, across three difficulties: Easy, Normal and Hard.",
    ],
    modesHeading: "Modes",
    modes: [
      {
        name: "Score Attack",
        text: "How far can you get in 60 seconds? Separate bests and leaderboards for Easy, Normal and Hard.",
      },
      {
        name: "Daily Challenge",
        text: "Five questions, the same for everyone, refreshed at 00:00 UTC. Replay as often as you like.",
      },
      {
        name: "Ranked Battle",
        text: "1v1 on an identical board, first to 5 points. Coming in a later build.",
      },
    ],
    statusLabel: "Status",
    statusValue: "In development (preparing for submission)",
    releaseLabel: "Release",
    releaseValue: "To be announced",
    languageLabel: "Languages",
    languageValue: "Japanese / English",
    follow: "Follow the build on X",
    shots: [
      "Home screen",
      "A Hard board with 20 cards",
      "Result screen",
      "Theme collection",
      "Leaderboard",
    ],
    note: "This page covers a game that is still in development. The icon, screenshots and details may change before release.",
  },
  "zh-cn": {
    homeTitle: "开发中",
    homeLead: "正在制作的游戏。虽然还没发布，欢迎来看看进度。",
    homeButton: "查看开发中的游戏",
    status: "开发中",
    catch: "用数字，解开文字。",
    genre: "文字解谜",
    platform: "iOS",
    lead: "A=1、B=2、……Z=26。屏幕上出现一个英文单词，你要在 60 秒内从左到右依次点击能变成对应字母的数字卡片。目前正在为 iOS 开发，目标是上架 App Store。",
    dialogue: [
      { speaker: "onaga", text: "Numphabet……这个要怎么念啊？" },
      {
        speaker: "akao",
        text: "读作「Num-phabet」，是 number 和 alphabet 拼起来的。A=1、B=2，一直到 Z=26。出现一个单词，你就用数字卡片把它拼出来。",
      },
      {
        speaker: "onaga",
        text: "那 CAT 不就是点 3、1、20 吗？听起来很简单嘛。",
      },
      {
        speaker: "akao",
        text: "牌面上的卡片永远比单词需要的多。而且有些卡片要先算，比如「9+5」；还有些是把字母表倒着数的 Z↔A。",
      },
      {
        speaker: "onaga",
        text: "倒着数？那「1」就变成 Z 了？我头都晕了。",
      },
      {
        speaker: "akao",
        text: "还有两种规则叠在一起的卡片呢。真正难的从来不是计算，而是从一堆卡片里找到对的那一张。还在做，进度我会发在 X 上。",
      },
    ],
    features: [
      "A=1 …… Z=26。用能变成对应字母的数字卡片，从左到右完成整个单词。",
      "先做加减法才变成字母的卡片（9+5）、把字母表倒着数的卡片（Z↔A），以及两者兼具的卡片。",
      "每个牌面至少混入 4 张干扰卡，而且大多只和正解差 1～2，一眼看不出来。",
      "每局 60 秒，分为 EASY / NORMAL / HARD 三个难度。",
    ],
    modesHeading: "模式",
    modes: [
      {
        name: "计分挑战",
        text: "60 秒内能解多少？EASY / NORMAL / HARD 各有独立的最佳成绩和排行榜。",
      },
      {
        name: "每日挑战",
        text: "所有人相同的 5 道题，每天 0 点（UTC）更新，可以反复挑战。",
      },
      {
        name: "排位对战",
        text: "1 对 1 使用相同牌面比速度，先得 5 分者胜。将在后续版本推出。",
      },
    ],
    statusLabel: "当前状态",
    statusValue: "开发中（正在准备提交商店）",
    releaseLabel: "发布时间",
    releaseValue: "未定",
    languageLabel: "支持语言",
    languageValue: "日语 / 英语",
    follow: "在 X 上关注开发进度",
    shots: [
      "主界面",
      "HARD 牌面（20 张）",
      "结算画面",
      "主题收藏",
      "排行榜",
    ],
    note: "本页面介绍的是仍在开发中的游戏。图标、截图和内容可能会在正式发布前发生变化。",
  },
  "zh-tw": {
    homeTitle: "開發中",
    homeLead: "正在製作的遊戲。雖然還沒發布，歡迎來看看進度。",
    homeButton: "查看開發中的遊戲",
    status: "開發中",
    catch: "用數字，解開文字。",
    genre: "文字解謎",
    platform: "iOS",
    lead: "A=1、B=2、……Z=26。畫面上出現一個英文單字，你要在 60 秒內從左到右依序點擊能變成對應字母的數字卡片。目前正在為 iOS 開發，目標是上架 App Store。",
    dialogue: [
      { speaker: "onaga", text: "Numphabet……這個要怎麼唸啊？" },
      {
        speaker: "akao",
        text: "唸作「Num-phabet」，是 number 和 alphabet 拼起來的。A=1、B=2，一直到 Z=26。出現一個單字，你就用數字卡片把它拼出來。",
      },
      {
        speaker: "onaga",
        text: "那 CAT 不就是點 3、1、20 嗎？聽起來很簡單嘛。",
      },
      {
        speaker: "akao",
        text: "牌面上的卡片永遠比單字需要的多。而且有些卡片要先算，例如「9+5」；還有些是把字母表倒著數的 Z↔A。",
      },
      {
        speaker: "onaga",
        text: "倒著數？那「1」就變成 Z 了？我頭都暈了。",
      },
      {
        speaker: "akao",
        text: "還有兩種規則疊在一起的卡片呢。真正難的從來不是計算，而是從一堆卡片裡找到對的那一張。還在做，進度我會發在 X 上。",
      },
    ],
    features: [
      "A=1 …… Z=26。用能變成對應字母的數字卡片，從左到右完成整個單字。",
      "先做加減法才變成字母的卡片（9+5）、把字母表倒著數的卡片（Z↔A），以及兩者兼具的卡片。",
      "每個牌面至少混入 4 張干擾卡，而且大多只和正解差 1～2，一眼看不出來。",
      "每局 60 秒，分為 EASY / NORMAL / HARD 三個難度。",
    ],
    modesHeading: "模式",
    modes: [
      {
        name: "計分挑戰",
        text: "60 秒內能解多少？EASY / NORMAL / HARD 各有獨立的最佳成績與排行榜。",
      },
      {
        name: "每日挑戰",
        text: "所有人相同的 5 道題，每天 0 點（UTC）更新，可以反覆挑戰。",
      },
      {
        name: "排位對戰",
        text: "1 對 1 使用相同牌面比速度，先得 5 分者勝。將在後續版本推出。",
      },
    ],
    statusLabel: "目前狀態",
    statusValue: "開發中（正在準備提交商店）",
    releaseLabel: "發布時間",
    releaseValue: "未定",
    languageLabel: "支援語言",
    languageValue: "日文 / 英文",
    follow: "在 X 上追蹤開發進度",
    shots: [
      "主畫面",
      "HARD 牌面（20 張）",
      "結算畫面",
      "主題收藏",
      "排行榜",
    ],
    note: "本頁介紹的是仍在開發中的遊戲。圖示、螢幕截圖與內容可能會在正式發布前變動。",
  },
  ko: {
    homeTitle: "개발 중",
    homeLead:
      "지금 만들고 있는 게임입니다. 출시는 아직이지만 진행 상황을 살짝 공개합니다.",
    homeButton: "개발 중인 게임 보기",
    status: "개발 중",
    catch: "숫자로, 낱말을 풀어라.",
    genre: "단어 퍼즐",
    platform: "iOS",
    lead: "A=1, B=2, … Z=26. 화면에 뜬 영어 단어를, 그 글자가 되는 숫자 카드를 왼쪽부터 차례로 눌러 60초 안에 완성하는 퍼즐입니다. iOS용으로 개발 중이며 App Store 출시를 목표로 하고 있습니다.",
    dialogue: [
      { speaker: "onaga", text: "Numphabet… 이거 어떻게 읽어?" },
      {
        speaker: "akao",
        text: "넘파벳. number랑 alphabet을 합친 말이야. A=1, B=2, Z=26까지. 나온 단어를 숫자 카드로 만들어 가는 퍼즐이지.",
      },
      {
        speaker: "onaga",
        text: "그럼 CAT이면 3, 1, 20만 누르면 되는 거 아냐? 쉽잖아.",
      },
      {
        speaker: "akao",
        text: "보드에는 항상 단어에 필요한 것보다 카드가 많아. 게다가 9+5처럼 먼저 계산해야 글자가 되는 카드도, Z↔A로 알파벳을 거꾸로 세는 카드도 있어.",
      },
      {
        speaker: "onaga",
        text: "거꾸로? 그럼 1이 Z가 되는 거야? 벌써 머리가 아픈데.",
      },
      {
        speaker: "akao",
        text: "둘 다 걸린 카드까지 있어. 진짜 어려운 건 계산이 아니라 맞는 카드 한 장을 찾아내는 거야. 아직 개발 중이라 진행 상황은 X에 올리고 있어.",
      },
    ],
    features: [
      "A=1 … Z=26. 그 글자가 되는 숫자 카드를 왼쪽부터 눌러 단어를 완성합니다.",
      "먼저 계산해야 글자가 되는 카드(9+5), 알파벳을 거꾸로 세는 카드(Z↔A), 그리고 둘 다 적용되는 카드.",
      "보드마다 최소 4장의 함정 카드가 섞이고, 대부분 정답과 1~2 차이라 한눈에 구별되지 않습니다.",
      "한 판 60초. 난이도는 EASY / NORMAL / HARD 세 단계.",
    ],
    modesHeading: "모드",
    modes: [
      {
        name: "스코어 어택",
        text: "60초 동안 어디까지 풀 수 있을까. EASY / NORMAL / HARD 각각 최고 기록과 리더보드가 있습니다.",
      },
      {
        name: "데일리 챌린지",
        text: "모두에게 똑같은 5문제. 매일 0시(UTC)에 갱신되고 몇 번이든 다시 플레이할 수 있습니다.",
      },
      {
        name: "랭크 대전",
        text: "1대1로 같은 보드를 빨리 풀어 5점 선취. 이후 빌드에서 추가될 예정입니다.",
      },
    ],
    statusLabel: "현재 상태",
    statusValue: "개발 중 (스토어 제출 준비 중)",
    releaseLabel: "출시 예정",
    releaseValue: "미정",
    languageLabel: "지원 언어",
    languageValue: "일본어 / 영어",
    follow: "X에서 개발 진행 상황 보기",
    shots: [
      "홈 화면",
      "HARD 보드(20장)",
      "결과 화면",
      "테마 컬렉션",
      "리더보드",
    ],
    note: "이 페이지는 아직 개발 중인 게임을 소개합니다. 아이콘과 스크린샷, 내용은 출시 전까지 달라질 수 있습니다.",
  },
  es: {
    homeTitle: "En desarrollo",
    homeLead:
      "El juego que estoy creando ahora mismo. Todavía no ha salido, pero aquí puedes ver cómo va.",
    homeButton: "Ver el juego en desarrollo",
    status: "En desarrollo",
    catch: "Lee la palabra. Piensa en números.",
    genre: "Puzle de palabras",
    platform: "iOS",
    lead: "A=1, B=2, … Z=26. Aparece una palabra en inglés y la completas tocando, de izquierda a derecha, las cartas numéricas que se convierten en sus letras, todo en 60 segundos. En desarrollo para iOS, con la App Store como destino.",
    dialogue: [
      { speaker: "onaga", text: "Numphabet… ¿y esto cómo se lee?" },
      {
        speaker: "akao",
        text: "Numphabet, de number y alphabet. A=1, B=2, hasta Z=26. Aparece una palabra y la construyes con cartas numéricas.",
      },
      {
        speaker: "onaga",
        text: "Entonces para CAT solo toco 3, 1 y 20, ¿no? Suena fácil.",
      },
      {
        speaker: "akao",
        text: "En el tablero siempre hay más cartas de las que necesita la palabra. Y algunas hacen primero una operación, como 9+5. Otras recorren el alfabeto al revés: Z↔A.",
      },
      {
        speaker: "onaga",
        text: "¿Al revés? ¿Entonces el 1 se convierte en Z? Ya me duele la cabeza.",
      },
      {
        speaker: "akao",
        text: "Y hay cartas que hacen las dos cosas a la vez. Lo difícil nunca es la aritmética: es encontrar la carta correcta. Sigo desarrollándolo y publico los avances en X.",
      },
    ],
    features: [
      "A=1 … Z=26. Completa cada palabra con las cartas numéricas que se convierten en sus letras, de izquierda a derecha.",
      "Cartas que primero calculan (9+5), cartas que recorren el alfabeto al revés (Z↔A) y cartas que hacen ambas cosas.",
      "Cada tablero incluye al menos cuatro señuelos, y la mayoría se queda a uno o dos de la respuesta real: no se distinguen de un vistazo.",
      "60 segundos por partida, en tres dificultades: Easy, Normal y Hard.",
    ],
    modesHeading: "Modos",
    modes: [
      {
        name: "Contrarreloj",
        text: "¿Hasta dónde llegas en 60 segundos? Récords y clasificaciones separados para Easy, Normal y Hard.",
      },
      {
        name: "Reto diario",
        text: "Cinco preguntas iguales para todo el mundo, renovadas a las 00:00 UTC. Puedes repetirlo cuantas veces quieras.",
      },
      {
        name: "Combate clasificatorio",
        text: "1 contra 1 sobre el mismo tablero, el primero en llegar a 5 puntos. Llegará en una versión posterior.",
      },
    ],
    statusLabel: "Estado",
    statusValue: "En desarrollo (preparando el envío a la tienda)",
    releaseLabel: "Lanzamiento",
    releaseValue: "Por anunciar",
    languageLabel: "Idiomas",
    languageValue: "Japonés / Inglés",
    follow: "Sigue el desarrollo en X",
    shots: [
      "Pantalla de inicio",
      "Un tablero Hard con 20 cartas",
      "Pantalla de resultados",
      "Colección de temas",
      "Clasificación",
    ],
    note: "Esta página presenta un juego que aún está en desarrollo. El icono, las capturas y los detalles pueden cambiar antes del lanzamiento.",
  },
  fr: {
    homeTitle: "En développement",
    homeLead:
      "Le jeu sur lequel je travaille en ce moment. Il n'est pas encore sorti, mais voici où il en est.",
    homeButton: "Voir le jeu en développement",
    status: "En développement",
    catch: "Lis le mot. Pense en chiffres.",
    genre: "Puzzle de mots",
    platform: "iOS",
    lead: "A=1, B=2, … Z=26. Un mot anglais apparaît : vous le complétez en touchant, de gauche à droite, les cartes numérotées qui deviennent ses lettres, le tout en 60 secondes. En développement sur iOS, destination l'App Store.",
    dialogue: [
      { speaker: "onaga", text: "Numphabet… ça se prononce comment, ce truc ?" },
      {
        speaker: "akao",
        text: "Numphabet, de number et alphabet. A=1, B=2, jusqu'à Z=26. Un mot apparaît et tu le reconstruis avec des cartes numérotées.",
      },
      {
        speaker: "onaga",
        text: "Donc pour CAT je touche juste 3, 1 et 20 ? Ça a l'air facile.",
      },
      {
        speaker: "akao",
        text: "Le plateau contient toujours plus de cartes que le mot n'en demande. Et certaines calculent d'abord, comme 9+5. D'autres parcourent l'alphabet à l'envers : Z↔A.",
      },
      {
        speaker: "onaga",
        text: "À l'envers ? Donc 1 devient Z ? J'ai déjà mal à la tête.",
      },
      {
        speaker: "akao",
        text: "Et certaines cartes font les deux à la fois. Le difficile n'est jamais le calcul : c'est de trouver la bonne carte. C'est toujours en chantier, je publie l'avancement sur X.",
      },
    ],
    features: [
      "A=1 … Z=26. Complétez chaque mot avec les cartes numérotées qui deviennent ses lettres, de gauche à droite.",
      "Des cartes qui calculent d'abord (9+5), des cartes qui parcourent l'alphabet à l'envers (Z↔A) et des cartes qui font les deux.",
      "Chaque plateau contient au moins quatre leurres, la plupart à un ou deux rangs de la vraie réponse : impossible de les repérer d'un coup d'œil.",
      "60 secondes par partie, en trois difficultés : Easy, Normal et Hard.",
    ],
    modesHeading: "Modes",
    modes: [
      {
        name: "Contre-la-montre",
        text: "Jusqu'où irez-vous en 60 secondes ? Records et classements distincts pour Easy, Normal et Hard.",
      },
      {
        name: "Défi quotidien",
        text: "Cinq questions, les mêmes pour tout le monde, renouvelées à 00 h 00 UTC. Rejouable autant de fois que vous voulez.",
      },
      {
        name: "Match classé",
        text: "1 contre 1 sur un plateau identique, premier à 5 points. Prévu pour une version ultérieure.",
      },
    ],
    statusLabel: "État",
    statusValue: "En développement (préparation de la soumission)",
    releaseLabel: "Sortie",
    releaseValue: "À annoncer",
    languageLabel: "Langues",
    languageValue: "Japonais / Anglais",
    follow: "Suivre le développement sur X",
    shots: [
      "Écran d'accueil",
      "Un plateau Hard à 20 cartes",
      "Écran de résultats",
      "Collection de thèmes",
      "Classement",
    ],
    note: "Cette page présente un jeu encore en développement. L'icône, les captures et les détails peuvent changer d'ici la sortie.",
  },
  de: {
    homeTitle: "In Entwicklung",
    homeLead:
      "Das Spiel, an dem ich gerade arbeite. Noch nicht erschienen, aber hier ist der aktuelle Stand.",
    homeButton: "Das Spiel in Entwicklung ansehen",
    status: "In Entwicklung",
    catch: "Lies das Wort. Denk in Zahlen.",
    genre: "Wortpuzzle",
    platform: "iOS",
    lead: "A=1, B=2, … Z=26. Ein englisches Wort erscheint, und du vervollständigst es, indem du von links nach rechts die Zahlenkarten antippst, die zu seinen Buchstaben werden – alles in 60 Sekunden. In Entwicklung für iOS, Ziel ist der App Store.",
    dialogue: [
      { speaker: "onaga", text: "Numphabet … wie spricht man das überhaupt aus?" },
      {
        speaker: "akao",
        text: "Numphabet, aus number und alphabet. A=1, B=2, bis Z=26. Ein Wort erscheint, und du baust es aus Zahlenkarten.",
      },
      {
        speaker: "onaga",
        text: "Bei CAT tippe ich also einfach 3, 1 und 20? Klingt einfach.",
      },
      {
        speaker: "akao",
        text: "Auf dem Feld liegen immer mehr Karten, als das Wort braucht. Manche rechnen erst, etwa 9+5. Andere zählen das Alphabet rückwärts: Z↔A.",
      },
      {
        speaker: "onaga",
        text: "Rückwärts? Dann wird aus 1 ein Z? Mir raucht schon der Kopf.",
      },
      {
        speaker: "akao",
        text: "Und manche Karten machen beides gleichzeitig. Schwierig ist nie das Rechnen, sondern die eine richtige Karte zu finden. Es ist noch in Arbeit, den Fortschritt poste ich auf X.",
      },
    ],
    features: [
      "A=1 … Z=26. Vervollständige jedes Wort mit den Zahlenkarten, die zu seinen Buchstaben werden, von links nach rechts.",
      "Karten, die erst rechnen (9+5), Karten, die das Alphabet rückwärts zählen (Z↔A), und Karten, die beides tun.",
      "Jedes Feld enthält mindestens vier Täuschkarten, die meisten nur ein bis zwei Schritte von der echten Antwort entfernt – auf einen Blick nicht zu erkennen.",
      "60 Sekunden pro Runde, in drei Schwierigkeitsgraden: Easy, Normal und Hard.",
    ],
    modesHeading: "Modi",
    modes: [
      {
        name: "Punktejagd",
        text: "Wie weit kommst du in 60 Sekunden? Eigene Bestwerte und Ranglisten für Easy, Normal und Hard.",
      },
      {
        name: "Tägliche Herausforderung",
        text: "Fünf Aufgaben, für alle dieselben, täglich um 00:00 UTC neu. Beliebig oft wiederholbar.",
      },
      {
        name: "Ranglistenduell",
        text: "1 gegen 1 auf demselben Feld, wer zuerst 5 Punkte hat, gewinnt. Kommt in einem späteren Build.",
      },
    ],
    statusLabel: "Status",
    statusValue: "In Entwicklung (Einreichung wird vorbereitet)",
    releaseLabel: "Veröffentlichung",
    releaseValue: "Noch offen",
    languageLabel: "Sprachen",
    languageValue: "Japanisch / Englisch",
    follow: "Die Entwicklung auf X verfolgen",
    shots: [
      "Startbildschirm",
      "Ein Hard-Feld mit 20 Karten",
      "Ergebnisbildschirm",
      "Theme-Sammlung",
      "Rangliste",
    ],
    note: "Diese Seite stellt ein Spiel vor, das sich noch in Entwicklung befindet. Symbol, Screenshots und Angaben können sich bis zur Veröffentlichung ändern.",
  },
  "pt-br": {
    homeTitle: "Em desenvolvimento",
    homeLead:
      "O jogo que estou construindo agora. Ainda não foi lançado, mas dá para ver como está indo.",
    homeButton: "Ver o jogo em desenvolvimento",
    status: "Em desenvolvimento",
    catch: "Leia a palavra. Pense em números.",
    genre: "Quebra-cabeça de palavras",
    platform: "iOS",
    lead: "A=1, B=2, … Z=26. Uma palavra em inglês aparece e você a completa tocando, da esquerda para a direita, nas cartas numéricas que viram suas letras — tudo em 60 segundos. Em desenvolvimento para iOS, com a App Store como destino.",
    dialogue: [
      { speaker: "onaga", text: "Numphabet… e isso lê como?" },
      {
        speaker: "akao",
        text: "Numphabet, de number e alphabet. A=1, B=2, até Z=26. Uma palavra aparece e você a monta com cartas numéricas.",
      },
      {
        speaker: "onaga",
        text: "Então em CAT é só tocar 3, 1 e 20? Parece fácil.",
      },
      {
        speaker: "akao",
        text: "O tabuleiro sempre tem mais cartas do que a palavra precisa. E algumas fazem uma conta primeiro, como 9+5. Outras percorrem o alfabeto de trás para frente: Z↔A.",
      },
      {
        speaker: "onaga",
        text: "De trás para frente? Então o 1 vira Z? Minha cabeça já está doendo.",
      },
      {
        speaker: "akao",
        text: "E tem carta que faz as duas coisas ao mesmo tempo. O difícil nunca é a conta: é achar a carta certa. Ainda estou construindo, e vou postando o progresso no X.",
      },
    ],
    features: [
      "A=1 … Z=26. Complete cada palavra com as cartas numéricas que viram suas letras, da esquerda para a direita.",
      "Cartas que fazem a conta primeiro (9+5), cartas que percorrem o alfabeto de trás para frente (Z↔A) e cartas que fazem as duas coisas.",
      "Todo tabuleiro traz pelo menos quatro iscas, e a maioria fica a uma ou duas casas da resposta certa: não dá para distinguir de relance.",
      "60 segundos por partida, em três dificuldades: Easy, Normal e Hard.",
    ],
    modesHeading: "Modos",
    modes: [
      {
        name: "Ataque de pontuação",
        text: "Até onde você chega em 60 segundos? Recordes e rankings separados para Easy, Normal e Hard.",
      },
      {
        name: "Desafio diário",
        text: "Cinco perguntas, as mesmas para todo mundo, renovadas às 00:00 UTC. Dá para repetir quantas vezes quiser.",
      },
      {
        name: "Partida ranqueada",
        text: "1 contra 1 no mesmo tabuleiro, o primeiro a 5 pontos vence. Chega em uma versão futura.",
      },
    ],
    statusLabel: "Situação",
    statusValue: "Em desenvolvimento (preparando o envio para a loja)",
    releaseLabel: "Lançamento",
    releaseValue: "A definir",
    languageLabel: "Idiomas",
    languageValue: "Japonês / Inglês",
    follow: "Acompanhar o desenvolvimento no X",
    shots: [
      "Tela inicial",
      "Um tabuleiro Hard com 20 cartas",
      "Tela de resultado",
      "Coleção de temas",
      "Ranking",
    ],
    note: "Esta página apresenta um jogo que ainda está em desenvolvimento. O ícone, as capturas e os detalhes podem mudar antes do lançamento.",
  },
};
