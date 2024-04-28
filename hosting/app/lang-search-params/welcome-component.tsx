"use client";

import { useSearchParams } from "next/navigation";

import Link from "next/link";
import { i18nMap } from "../../i18n/i18n";
import { SwitchLangSearchParams } from "./switch-lang-search-params";
import { I18nType, LangType } from "../../i18n/i18n-type";

const metaProps = (i18n: I18nType) => [
  { property: "og:type", content: "website" },
  { property: "og:title", content: "playground-koshitake2m2" },
  {
    property: "og:description",
    content: i18n.welcome,
  },
  { property: "og:site_name", content: "playground-koshitake2m2" },
];

const setMetadata = (i18n: I18nType) => {
  if (typeof document !== "undefined" && !document.getElementById("og:title")) {
    for (const metaProp of metaProps(i18n)) {
      const element = document.createElement("meta");
      element.setAttribute("id", metaProp.property);
      element.setAttribute("property", metaProp.property);
      element.setAttribute("content", metaProp.content);
      document.head.appendChild(element);
    }
  }
};

export function WelcomeComponent() {
  const searchParams = useSearchParams();

  const lang: LangType = searchParams.get("lang") === "ja" ? "ja" : "en";
  const i18n = i18nMap[lang];

  setMetadata(i18n);

  return (
    <>
      <h1>lang</h1>
      <p>lang: {lang}</p>
      <p>welcome: {i18n.welcome}</p>
      <Link href={`/lang-search-params/hello?lang=${lang}`}>hello page</Link>
      <SwitchLangSearchParams />
    </>
  );
}
