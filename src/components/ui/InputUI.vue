<template>
  <el-container>
    <el-header>Input</el-header>
    <el-main>
      <el-row v-show="$route.params.subId === `default`">
        <el-input v-model="input" placeholder="Please input" />
        <el-input v-model="input" disabled placeholder="Please input" />
      </el-row>

      <el-row v-show="$route.params.subId === `limit`">
        <el-input
          v-model="limitInput"
          maxlength="10"
          placeholder="Please input"
          show-word-limit
          type="text"
        />
        <el-input
          v-model="limitInput2"
          maxlength="30"
          placeholder="Please input"
          show-word-limit
          type="textarea"
        />
      </el-row>

      <el-row v-show="$route.params.subId === `textarea`">
        <el-input
          v-model="textarea"
          :rows="2"
          type="textarea"
          placeholder="Please input"
        />
      </el-row>

      <el-row v-show="$route.params.subId === `autosize`">
        <el-input
          v-model="textarea2"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          placeholder="Please input"
        />
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputUI",
  data() {
    return {
      input: "",
      limitInput: "",
      limitInput2: "",
      textarea: "",
      textarea2: "",
    };
  },
});
</script>

<style lang="scss" scoped></style>
