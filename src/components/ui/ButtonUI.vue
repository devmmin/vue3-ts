<template>
  <el-container>
    <el-header>Button</el-header>
    <el-main>
      <el-row v-show="$route.params.subId === `default`" class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </el-row>

      <el-row v-show="$route.params.subId === `default`" class="mb-4">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
      </el-row>

      <el-row v-show="$route.params.subId === `round`" class="mb-4">
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
      </el-row>

      <el-row v-show="$route.params.subId === `icon`">
        <el-button :icon="Search" circle />
        <el-button type="primary" :icon="Edit" circle />
        <el-button type="success" :icon="Check" circle />
        <el-button type="info" :icon="Message" circle />
        <el-button type="warning" :icon="Star" circle />
        <el-button type="danger" :icon="Delete" circle />
      </el-row>
    </el-main>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";

export default defineComponent({
  name: "ButtonUI",
  setup() {
    return {
      Check,
      Delete,
      Edit,
      Message,
      Search,
      Star,
    };
  },
});
</script>
