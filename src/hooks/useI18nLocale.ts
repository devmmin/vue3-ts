import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import en from "element-plus/lib/locale/lang/en";
import ko from "element-plus/lib/locale/lang/ko";
import { setLocale } from "@vee-validate/i18n";
import { locale as setDayjsLocale } from "dayjs";

export default function useI18nLocale() {
  const { locale: i18nLocale } = useI18n({
    inheritLocale: true,
    useScope: "global",
  });

  const language = ref("ko");
  const locale = computed(() => (language.value === "ko" ? ko : en));
  const toggle = () => {
    language.value = language.value === "ko" ? "en" : "ko";
    i18nLocale.value = language.value;
    setLocale(language.value);
    setDayjsLocale(language.value);
  };

  return { locale, language, toggle };
}
