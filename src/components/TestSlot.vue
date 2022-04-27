<script setup>
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
</template>

<style scoped></style>
