import Link from "next/link";
import { i18nMap, langPathParams, LangType } from "../../../i18n/i18n";
import { SwitchLangLocalStorage } from "../switch-lang-local-storage";
import Script from "next/script";

export function generateStaticParams() {
  return langPathParams;
}

export default function LangPage({ params }: { params: { lang: LangType } }) {
  const { lang } = params;
  const i18n = i18nMap[lang];

  return (
    <>
      <Script src={`/lang-local-storage/redirect.js`}></Script>
      <h1>lang</h1>
      <p>lang: {lang}</p>
      <p>{i18n.say("wow")}</p>
      <Link href={`/lang-local-storage/${lang}/hello`}>hello</Link>
      <SwitchLangLocalStorage />
    </>
  );
}
