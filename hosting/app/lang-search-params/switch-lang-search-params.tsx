"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LangType } from "../../i18n/i18n-type";

export function SwitchLangSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = new URLSearchParams(Array.from(searchParams.entries()));

  const onClickSwitchLang = (lang: LangType) => {
    const newParams = new URLSearchParams(current);
    newParams.set("lang", lang);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <>
      <h1>switch lang</h1>

      <button onClick={() => onClickSwitchLang("en")}>en</button>
      <button onClick={() => onClickSwitchLang("ja")}>ja</button>
    </>
  );
}
