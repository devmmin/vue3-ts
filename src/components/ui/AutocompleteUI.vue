<template>
  <el-container>
    <el-header>Autocomplete</el-header>
    <el-main>
      <el-row
        v-show="$route.params.subId === `default`"
        class="demo-autocomplete text-center"
      >
        <el-col :span="12">
          <div class="sub-title my-2 text-sm text-gray-600"></div>
          <el-autocomplete
            v-model="state1"
            :fetch-suggestions="querySearch"
            clearable
            class="inline-input w-50"
            placeholder="Please Input"
            @select="handleSelect"
          />
        </el-col>
      </el-row>
      <el-row v-show="$route.params.subId === `async`">
        <el-col :span="12">
          <div class="sub-title my-2 text-sm text-gray-600"></div>
          <el-autocomplete
            v-model="state2"
            :fetch-suggestions="querySearch"
            :trigger-on-focus="false"
            clearable
            class="inline-input w-50"
            placeholder="Please Input"
          />
        </el-col>
      </el-row>
      <el-row v-show="$route.params.subId === `custom`">
        <el-col :span="12">
          <div class="sub-title my-2 text-sm text-gray-600"></div>
          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearch"
            popper-class="my-autocomplete"
            placeholder="Please input"
          >
            <template #suffix>
              <el-icon class="el-input__icon">
                <Edit />
              </el-icon>
            </template>
            <template #default="{ item }">
              <div class="value">{{ item.value }}</div>
              <span class="link">{{ item.link }}</span>
            </template>
          </el-autocomplete>
        </el-col></el-row
      >
    </el-main>
  </el-container>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Edit } from "@element-plus/icons-vue";

export default defineComponent({
  name: "AutocompleteUI",
  components: { Edit },
  setup() {
    interface RestaurantItem {
      value: string;
      link: string;
    }

    const state = ref("");
    const state1 = ref("");
    const state2 = ref("");

    const restaurants = ref<RestaurantItem[]>([]);

    const querySearch = (queryString: string, cb: any) => {
      const results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value;
      // call callback function to return suggestions
      cb(results);
    };

    const createFilter = (queryString: string) => {
      return (restaurant: RestaurantItem) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };

    const loadAll = () => {
      return [
        { value: "vue", link: "https://github.com/vuejs/vue" },
        { value: "element", link: "https://github.com/ElemeFE/element" },
        { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
        { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
        { value: "vuex", link: "https://github.com/vuejs/vuex" },
        { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
        { value: "babel", link: "https://github.com/babel/babel" },
      ];
    };

    const handleSelect = (item: RestaurantItem) => {
      // TODO: API call logic example
      console.log("handleSelect", item.value);
    };

    onMounted(() => {
      restaurants.value = loadAll();
    });

    return {
      state,
      state1,
      state2,
      querySearch,
      handleSelect,
    };
  },
});
</script>
