const browserLang = navigator.language;
const path = browserLang.startsWith("ja") ? "/lang/ja" : "/lang/en";
window.location = path;
