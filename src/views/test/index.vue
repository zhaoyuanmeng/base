<template>
  <div>测试vuex</div>
  <p>{{ a }}</p>
</template>

<script setup>
// import { getCurrentInstance } from "vue";
// const internalInstance = getCurrentInstance();
// const gol = internalInstance.appContext.config.globalProperties; // 访问 globalProperties

import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const a = ref("");
a.value = store.state.user.count;
</script>

<style scoped></style>
