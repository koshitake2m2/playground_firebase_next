import Link from "next/link";
import { i18nMap, langPathParams, LangType } from "../../../i18n/i18n";
import { SwitchLang } from "../switch-lang";

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
      <p>{i18n.say("wow")}</p>
      <Link href={`/lang/${lang}/hello`}>hello</Link>
      <SwitchLang />
    </>
  );
}
