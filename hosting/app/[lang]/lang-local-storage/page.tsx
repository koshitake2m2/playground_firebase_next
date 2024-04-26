import Link from "next/link";
import { i18nMap } from "../../../i18n/i18n";
import { permanentRedirect } from "next/navigation";
import path from "path";
import { SwitchLang } from "../../../components/switch-lang";
import { SwitchLangLocalStorage } from "../../../components/switch-lang-local-storage";
import Script from "next/script";

const langParams = [{ lang: "en" }, { lang: "ja" }];
type LangType = "en" | "ja";

export function generateStaticParams() {
  return langParams;
}

export default function LangPage({ params }: { params: { lang: LangType } }) {
  const { lang } = params;
  const i18n = i18nMap[lang];
  // const pathname = usePathname();

  return (
    <>
      <Script src={`/redirect_lang_local_storage.js`}></Script>
      <h1>lang</h1>
      <p>lang: {lang}</p>
      <p>{i18n.say("wow")}</p>
      <Link href={`/${lang}/lang-local-storage/hello`}>hello</Link>
      <SwitchLangLocalStorage />
    </>
  );
}
