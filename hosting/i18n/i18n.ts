import { i18nEn } from "./i18n.en";
import { i18nJa } from "./i18n.ja";

export type I18nType = typeof i18nEn;
export type LangType = "en" | "ja";
export const langPathParams = [{ lang: "en" }, { lang: "ja" }];

export const i18nMap = {
  en: i18nEn,
  ja: { ...i18nEn, ...i18nJa },
};
