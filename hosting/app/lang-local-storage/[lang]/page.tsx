import Link from "next/link";
import { i18nMap, langPathParams } from "../../../i18n/i18n";
import { SwitchLangLocalStorage } from "../switch-lang-local-storage";
import { LangType } from "../../../i18n/i18n-type";

export function generateStaticParams() {
  return langPathParams;
}

export default function LangPage({ params }: { params: { lang: LangType } }) {
  const { lang } = params;
  const i18n = i18nMap[lang];

  return (
    <>
      <h1>lang</h1>
      <p>lang: {lang}</p>
      <p>welcome: {i18n.welcome}</p>
      <Link href={`/lang-local-storage/${lang}/hello`}>hello page</Link>
      <SwitchLangLocalStorage />
    </>
  );
}
