import { Menu, Path } from "@/types";

export const paths: Path = {
  components: { path: "/components" },
  library: { path: "/library" },
};

export const menus: Array<Menu> = [
  {
    name: "components",
    children: {
      button: ["default", "round", "icon"],
      autocomplete: ["default", "async", "custom"],
      checkbox: ["default", "medium", "small", "group", "button"],
      input: ["default", "limit", "textarea", "autosize"],
      select: [],
      table: [],
      form: [],
      tag: [],
      pagination: [],
      skeleton: [],
      step: [],
      tabs: [],
      alert: [],
      dialog: [],
      drawer: [],
      loading: [],
      message: [],
      "message box": [],
    },
  },
  {
    name: "library",
    children: {
      "vue-i18n": ["default", "SFC"],
      "vee-validate": [
        "default",
        "form-level",
        "ui-library",
        "field-level",
        "handling-forms",
        "using-handle-submit",
        "using-validate",
        "using-submit",
        "handling-reset",
        "setting-errors",
        "validation",
      ],
      dayjs: ["default", "utc", "timezone", "locale"],
    },
  },
];
