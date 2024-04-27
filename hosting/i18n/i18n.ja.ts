import { I18nType } from "./i18n-type";

export const i18nJa = {
  lang: "ja",
  greeting: "こんにちは",
  welcome: "ようこそ",
  say: (words: string) => `「${words}」と言う`,
  a: {
    b: "abだよ",
  },
} as const satisfies Partial<I18nType>;
