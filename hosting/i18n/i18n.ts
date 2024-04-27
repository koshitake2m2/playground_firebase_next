import { I18nType, LangType } from "./i18n-type";
import { i18nEn } from "./i18n.en";
import { i18nJa } from "./i18n.ja";

export const langPathParams: { lang: LangType }[] = [
  { lang: "en" },
  { lang: "ja" },
];

export const i18nMap: Record<LangType, I18nType> = {
  en: i18nEn,
  ja: { ...i18nEn, ...i18nJa },
};
