type TApiLang = {
  id: number; // Unique ID for each language
  code: string; // Short form of language
  title: string; // Title for language
  short: string; // Short title for language
}[];

interface IConfig {
  APP_NAME: string;
  API_ROOT: string;
  STATIC_FILES_DIR: string;
  DEFAULT_LANGUAGE: string;
  API_LANGUAGES: TApiLang;
}

const config: IConfig = {
  APP_NAME: "TEST APP",
  API_ROOT: process.env.REACT_APP_ROOT_API || "",
  STATIC_FILES_DIR: process.env.REACT_APP_ROOT_STATIC_FILES_DIR || "",
  DEFAULT_LANGUAGE: "uz",
  API_LANGUAGES: [
    { id: 1, code: "uz", title: "O'zbekcha", short: "UZ" },
    { id: 2, code: "ru", title: "Русский", short: "RU" },
    { id: 3, code: "en", title: "English", short: "EN" },
  ],
};



export default config;
