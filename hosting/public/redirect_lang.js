const browserLang = navigator.language;
const path = browserLang.startsWith("ja") ? "/ja/lang" : "/en/lang";
window.location = path;
