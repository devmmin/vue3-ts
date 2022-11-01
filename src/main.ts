import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

// https://pinia.vuejs.org/getting-started.html
import { createPinia } from "pinia";
import router from "./router";

// https://element-plus.org/en-US/guide/quickstart.html
import elementPlus from "element-plus";
import "element-plus/dist/index.css";

// https://day.js.org/en/
// @/lib/util/date.ts
import dayjs from "dayjs";

// extend
// https://day.js.org/docs/en/parse/utc
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
// https://day.js.org/docs/en/timezone/timezone
import timezone from "dayjs/plugin/timezone";
dayjs.extend(timezone);
// https://day.js.org/docs/en/i18n/i18n
import localeData from "dayjs/plugin/localeData";
dayjs.extend(localeData);
// https://day.js.org/docs/en/display/format
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

// locale
// https://day.js.org/docs/en/i18n/changing-locale
// @/hooks/useI18nLocale.ts
import "dayjs/locale/ko";
import "dayjs/locale/en";
dayjs.locale("ko");

// https://vue-i18n.intlify.dev/
import i18n from "./i18n";

// https://vee-validate.logaretm.com/v4/
import "./lib/vee-validate";

createApp(App)
  .use(i18n)
  .use(router)
  .use(createPinia())
  .use(elementPlus)
  .mount("#app");
