<template>
  <el-container>
    <el-header>dayjs</el-header>
    <el-main>
      <el-col v-show="$route.params.subId === 'default'">
        <el-header>formatting</el-header>
        <p>new Date 객체 : {{ date1 }}</p>
        <p>UTC > YYYY-MM-DD HH:mm:ss : {{ formatUTC(date1) }}</p>
        <p>Local > YYYY-MM-DD HH:mm:ss : {{ formatLocal(date1) }}</p>
        <p>YYYY-MM-DD HH:mm:ss : {{ formatTime(date1) }}</p>
        <p>YYYY-MM-DD : {{ formatYYMMDD(date1) }}</p>
        <p>
          isUTC : {{ getDayjs(date1).isUTC() }} /
          {{ getDayjs(date1).utc().isUTC() }}
        </p>
      </el-col>

      <el-col v-show="$route.params.subId === 'utc'">
        <el-header>toISOString + extend (utc)</el-header>
        <p>new Date.toISOString() : {{ date2 }}</p>
        <p>UTC > YYYY-MM-DD HH:mm:ss : {{ formatUTC(date2) }}</p>
        <p>Local > YYYY-MM-DD HH:mm:ss : {{ formatLocal(date2) }}</p>
        <p>YYYY-MM-DD HH:mm:ss : {{ formatTime(date2) }}</p>
        <p>YYYY-MM-DD : {{ formatYYMMDD(date2) }}</p>
        <p>
          isUTC : {{ getDayjs(date2).isUTC() }} /
          {{ getDayjs(date2).utc().isUTC() }}
        </p>
      </el-col>

      <el-col v-show="$route.params.subId === 'timezone'">
        <el-header>extend (utc, timezone) </el-header>
        <p>new Date 객체 : {{ date3 }}</p>
        <p>timezone : {{ getDayjs(date3).tz("America/Toronto") }}</p>
        <p>
          timezone + format :
          {{ getDayjs(date3).tz("America/Toronto").format("YYYY-MM-DD") }}
        </p>
        <p>isUTC : {{ getDayjs(date3).tz("America/Toronto").isUTC() }}</p>
      </el-col>

      <el-col v-show="$route.params.subId === 'locale'">
        <el-header>extend (localeData) </el-header>
        <p>{{ dayjs.locale() }}</p>
        <p>{{ getDayjs(date3).localeData().months() }}</p>
        <p>
          {{ getDayjs(date3).localeData().weekdays() }}
        </p>
        <p>
          {{ getDayjs(date3).format("LL") }}
        </p>
      </el-col>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  formatTime,
  formatYYMMDD,
  formatUTC,
  formatLocal,
  getDayjs,
} from "@/lib/util/date";
import dayjs from "dayjs";

export default defineComponent({
  name: "DayJs",
  setup() {
    const date1 = new Date();

    const date2 = new Date().toISOString();

    const date3 = new Date();

    const date4 = new Date();

    return { date1, date2, date3, date4, dayjs };
  },
  methods: {
    formatTime,
    formatYYMMDD,
    formatUTC,
    formatLocal,
    getDayjs,
  },
});
</script>
