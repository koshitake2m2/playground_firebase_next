"use client";

import { useSearchParams } from "next/navigation";

import Link from "next/link";
import { i18nMap } from "../../i18n/i18n";
import { SwitchLangSearchParams } from "./switch-lang-search-params";
import { LangType } from "../../i18n/i18n-type";

export function WelcomeComponent() {
  const searchParams = useSearchParams();

  const lang: LangType = searchParams.get("lang") === "ja" ? "ja" : "en";
  const i18n = i18nMap[lang];

  return (
    <>
      <h1>lang</h1>
      <p>lang: {lang}</p>
      <p>welcome: {i18n.welcome}</p>
      <Link href={`/lang-query-params/hello?lang=${lang}`}>hello page</Link>
      <SwitchLangSearchParams />
    </>
  );
}
