import Script from "next/script";

export default function RedirectLangPage() {
  return (
    <>
      <Script src={`/redirect_lang_local_storage.js`}></Script>
    </>
  );
}
