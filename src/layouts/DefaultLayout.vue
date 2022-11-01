<template>
  <el-config-provider :locale="locale">
    <el-container>
      <SideMenu />
      <el-container>
        <el-header>
          <el-row align="middle" justify="space-between">
            <el-breadcrumb
              :separator-icon="
                (toPath && toPath.length > 1 && ArrowRight) || undefined
              "
            >
              <el-breadcrumb-item :to="{ path: '/' }"
                >homepage</el-breadcrumb-item
              >
              <el-breadcrumb-item v-for="path in toPath" :key="path">{{
                path
              }}</el-breadcrumb-item>
            </el-breadcrumb>
            <el-button mb-2 @click="toggle"
              >Switch Language / {{ language }}</el-button
            >
          </el-row>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideMenu from "@/components/SideMenu.vue";
import { ArrowRight } from "@element-plus/icons-vue";
import useI18nLocale from "@/hooks/useI18nLocale";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    SideMenu,
  },
  setup() {
    const { locale, language, toggle } = useI18nLocale();

    return {
      locale,
      language,
      toggle,
      ArrowRight,
    };
  },
  computed: {
    toPath() {
      const paths = this.$route.path.split("/");
      return paths.splice(1);
    },
  },
});
</script>

<style lang="scss" scoped></style>
