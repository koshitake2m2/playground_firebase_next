'use client';

import { useSearchParams } from 'next/navigation';
import { i18nMap } from '../../../i18n/i18n';
import { SwitchLangSearchParams } from '../switch-lang-search-params';
import { LangType } from '../../../i18n/i18n-type';

export default function HelloComponent() {
  const searchParams = useSearchParams();

  const lang: LangType = searchParams.get('lang') === 'ja' ? 'ja' : 'en';
  const i18n = i18nMap[lang];
  return (
    <>
      <h1>Hello</h1>
      <p>lang: {lang}</p>
      <p>greeting: {i18n.greeting}</p>
      <SwitchLangSearchParams />
    </>
  );
}
