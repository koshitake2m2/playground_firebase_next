import Script from "next/script";

export default function LangPage() {
  return (
    <>
      <Script src={`/lang/redirect.js`}></Script>
    </>
  );
}
