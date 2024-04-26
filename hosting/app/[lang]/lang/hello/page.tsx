import { SwitchLang } from "../../../../components/switch-lang";
import { i18nMap } from "../../../../i18n/i18n";

const langParams = [{ lang: "en" }, { lang: "ja" }];
type LangType = "en" | "ja";

export function generateStaticParams() {
  return langParams;
}

export default function HelloPage({ params }: { params: { lang: LangType } }) {
  const { lang } = params;
  const i18n = i18nMap[lang];
  return (
    <>
      <h1>Hello</h1>
      <p>lang: {lang}</p>
      <SwitchLang />
    </>
  );
}
