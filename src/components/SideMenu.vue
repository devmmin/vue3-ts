<template>
  <el-aside width="200px">
    <el-scrollbar>
      <el-menu
        v-for="menu in menus"
        :key="menu.name"
        @select="setMenu"
        @open="openMenu"
      >
        <el-sub-menu :index="menu.name">
          <template #title>
            {{ menu.name }}
          </template>
          <el-sub-menu
            v-for="children in Object.keys(menu.children)"
            :key="children"
            :index="children"
          >
            <template #title>{{ children }}</template>
            <el-menu-item-group>
              <el-menu-item
                v-for="item in menu.children[children]"
                :key="item"
                :index="item"
                >{{ item }}</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts">
import useNavigation from "@/hooks/useNavigation";

export default {
  name: "SideMenu",
  setup() {
    const { menus, setMenu, openMenu } = useNavigation();

    return {
      menus,
      setMenu,
      openMenu,
    };
  },
};
</script>

<style lang="scss" scoped></style>
