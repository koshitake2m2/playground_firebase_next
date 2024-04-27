import { I18nType } from "./i18n-type";

export const i18nJa = {
  lang: "ja",
  greeting: "こんにちは",
  welcome: "ようこそ",
  say: (words: string) => `言う ${words}`,
  a: {
    b: "abだよ",
  },
} as const satisfies Partial<I18nType>;
