import Script from "next/script";
import { SwitchLangLocalStorage } from "../../switch-lang-local-storage";
import { i18nMap, langPathParams, LangType } from "../../../../i18n/i18n";

export function generateStaticParams() {
  return langPathParams;
}

export default function HelloPage({ params }: { params: { lang: LangType } }) {
  const { lang } = params;
  const i18n = i18nMap[lang];
  return (
    <>
      <h1>Hello</h1>
      <p>lang: {lang}</p>
      <p>greeting: {i18n.greeting}</p>
      <SwitchLangLocalStorage />
    </>
  );
}
