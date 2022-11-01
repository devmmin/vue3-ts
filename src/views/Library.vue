<template>
  <el-container>
    <VueI18n v-if="$route.params.id === 'vue-i18n'" />
    <VeeValidate v-else-if="$route.params.id === 'vee-validate'" />
    <DayJs v-else-if="$route.params.id === 'dayjs'" />
    <el-container v-else>
      <el-header>{{ $route.meta.title }}</el-header>
      <el-main>
        <p style="margin: 0 auto">
          library 는 vue-i18n, vee-validate, dayjs 와 같이 화면에서 자주
          사용되며,<br />
          i18n 적용이 필요한 부분 예제 작성해놓기 위해 만든 화면입니다.
          <br />상단의 Switch Language 버튼에 연결한 hook을 통해 세 가지
          라이브러리의 언어가 함께 변경됩니다.
        </p>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import DayJs from "@/components/library/DayJs.vue";
import VeeValidate from "@/components/library/VeeValidate.vue";
import VueI18n from "@/components/library/VueI18n.vue";

export default {
  name: "I18nGuide",
  components: { VueI18n, VeeValidate, DayJs },
};
</script>
