<!-- <script setup>
import { ref } from "vue";
defineProps({
  msg: String,
});
const items = ref(["Feed a cat", "Buy milk"]);
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in items">
        <slot :item="item" :index="index"></slot>
      </li>
    </ul>
  </div>
</template> -->

<template>
  <div>
    <a-date-picker @change="onChange" />
    <br />
    <a-month-picker placeholder="Select month" @change="onChange(1, $event)" />
    <br />
    <a-range-picker @change="onChange" />
    <br />
    <a-week-picker placeholder="Select week" @change="onChange" />
  </div>
</template>
<script>
export default {
  methods: {
    onChange(e, data) {
      // console.log(date, dateString);
      console.log("new-data", data);
      console.log("time", e);
    },
  },
};
</script>

<style scoped></style>
