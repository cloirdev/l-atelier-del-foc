import { ui, defaultLang, type UiKey } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: UiKey) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function stripLangPrefix(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] in ui) return segments.slice(1).join("/");
  return segments.join("/");
}
