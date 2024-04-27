export type LangType = "en" | "ja";
export type I18nType = {
  lang: LangType;
  greeting: string;
  welcome: string;
  say: (words: string) => string;
  a: {
    b: string;
  };
};
