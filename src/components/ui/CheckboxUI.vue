<template>
  <el-container>
    <el-header>Checkbox</el-header>
    <el-main>
      <el-row v-show="$route.params.subId === `default`" class="mb-4">
        <el-checkbox v-model="checked1" label="Option 1" size="large" />
        <el-checkbox v-model="checked2" label="Option 2" size="large" />
      </el-row>

      <el-row v-show="$route.params.subId === `medium`" class="mb-4">
        <el-checkbox v-model="checked3" label="Option 1" />
        <el-checkbox v-model="checked4" label="Option 2" />
      </el-row>

      <el-row v-show="$route.params.subId === `small`" class="mb-4">
        <el-checkbox v-model="checked5" label="Option 1" size="small" />
        <el-checkbox v-model="checked6" label="Option 2" size="small" />
      </el-row>

      <el-row v-show="$route.params.subId === `group`" class="mb-4">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="Option A" />
          <el-checkbox label="Option B" />
          <el-checkbox label="Option C" />
          <el-checkbox label="disabled" disabled />
          <el-checkbox label="selected and disabled" disabled />
        </el-checkbox-group>
      </el-row>

      <el-row v-show="$route.params.subId === `button`" class="mb-4">
        <el-checkbox-group v-model="checkboxGroup1" size="large">
          <el-checkbox-button v-for="city in cities" :key="city" :label="city">
            {{ city }}
          </el-checkbox-button>
        </el-checkbox-group>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckboxUI",
  data() {
    return {
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: true,
      checkList: ["selected and disabled", "Option A"],
      checkboxGroup1: [],
      cities: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"],
    };
  },
});
</script>

<style lang="scss" scoped></style>
