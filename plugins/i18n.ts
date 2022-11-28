import en from "../locales/en";
import km from "../locales/km";
import { createI18n } from "vue-i18n";
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    strategy: "prefix_except_default",
    defaultLocale: "km",
    detectBrowserLanguage: true,
    lazy: true,
    langDir: "locale/",
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: "km",
    },
    legacy: false,
    globalInjection: true,
    locale: "en",
    messages: {
      en,
      km,
    },
    locales: [
      {
        code: "en",
        iso: "en-GB",
        file: "en",
        name: "EN",
      },
      {
        code: "km",
        iso: "km-KH",
        file: "km",
        name: "ខ្មែរ",
      },
    ],
  });

  vueApp.use(i18n);
});
