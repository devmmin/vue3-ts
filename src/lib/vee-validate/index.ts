import { localize, setLocale } from "@vee-validate/i18n";
import { min, required } from "@vee-validate/rules";
import { configure, defineRule } from "vee-validate";

// defineRule example
// defineRule("required", (value: string | number) => {
//   if (!value) {
//     return "필수 입력 항목입니다.";
//   }

//   if (typeof value === "string" && !value.length) {
//     return "필수 입력 항목입니다.";
//   }

//   return true;
// });

defineRule("required", required);
defineRule("min", min);

configure({
  // Generates an English message locale generator
  generateMessage: localize({
    en: {
      messages: {
        // interpolates the field name
        required: "The {field} is required",
        // interpolates the min, max params
        between: "The {field} value must be between 0:{min}, 1:{max}",
        // Interpolates another field value in the form
        confirmed: "The {field} value must match {age}",
      },
    },
    ko: {
      messages: {
        required: "{field}는 필수 입력 항목 입니다",
      },
    },
  }),
});

setLocale("ko");
