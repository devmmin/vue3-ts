<template>
  <el-container v-show="$route.params.subId === `default`">
    <el-header>vue-i18n</el-header>
    <el-main>
      <p>{{ $t("message.hi") }}</p>
    </el-main>
  </el-container>

  <el-container v-show="$route.params.subId === `SFC`">
    <el-header>vue-i18n</el-header>
    <el-main>
      <p>{{ t("hello") }}</p>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "VueI18n",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    // Something todo ..

    return { t };
  },
});
</script>

<style lang="scss" scoped></style>
<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  },
  "ko": {
    "hello": "안녕하세요 SFC에서 i18n을 사용하고 있습니다!"
  }
}
</i18n>
