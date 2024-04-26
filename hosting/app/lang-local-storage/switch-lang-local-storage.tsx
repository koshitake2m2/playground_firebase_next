"use client";

import { usePathname, useRouter } from "next/navigation";
import { LangType } from "../../i18n/i18n";

export function SwitchLangLocalStorage() {
  const router = useRouter();
  const pathname = usePathname();

  const onClickSwitchLang = (lang: LangType) => {
    const newPath = pathname.replace(
      /^\/lang-local-storage\/[^/]*/,
      `/lang-local-storage/${lang}`
    );
    localStorage.setItem("lang", lang);
    router.push(newPath);
  };

  return (
    <>
      <h1>switch lang</h1>

      <button onClick={() => onClickSwitchLang("en")}>en</button>
      <button onClick={() => onClickSwitchLang("ja")}>ja</button>
    </>
  );
}
