/**
 * @param {string} lang
 */
const redirectLang = (lang) => {
  const newPath = location.pathname.replace(/^\/[^/]*/, `/${lang}`);
  window.location = newPath;
};
const savedLang = localStorage.getItem("lang");

if (savedLang && ["en", "ja"].includes(savedLang)) {
  const pathLang = location.pathname.match(/^\/([^/]*)/)?.[1];
  if (pathLang !== savedLang) {
    redirectLang(savedLang);
  }
} else {
  const browserLang = navigator.language;
  const newLang = browserLang.startsWith("ja") ? "ja" : "en";
  localStorage.setItem("lang", newLang);

  const pathLang = location.pathname.match(/^\/([^/]*)/)?.[1];
  if (pathLang !== newLang) {
    redirectLang(newLang);
  }
}
