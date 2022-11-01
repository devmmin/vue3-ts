<template>
  <el-container>
    <ButtonUI v-if="$route.params.id === 'button'" />
    <AutocompleteUI v-else-if="$route.params.id === 'autocomplete'" />
    <CheckboxUI v-else-if="$route.params.id === 'checkbox'" />
    <InputUI v-else-if="$route.params.id === 'input'" />
    <el-container v-else>
      <el-header>{{ $route.meta.title }}</el-header>
      <el-main
        ><p style="margin: 0 auto">
          components 화면은 element-plus ui library를 사용해서 작성했으며,<br />
          필요한 UI들을 작성해가며, vue3 사용 예제를 만들기 위해 만든
          화면입니다.
        </p>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import AutocompleteUI from "@/components/ui/AutocompleteUI.vue";
import ButtonUI from "@/components/ui/ButtonUI.vue";
import CheckboxUI from "@/components/ui/CheckboxUI.vue";
import InputUI from "@/components/ui/InputUI.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UI",
  components: { ButtonUI, AutocompleteUI, CheckboxUI, InputUI },
});
</script>
