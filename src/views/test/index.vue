<template>
  <div>测试vuex</div>
  <p>{{ a }}</p>

  <div>测试 剧名插槽</div>
  <testslot>
    <template v-slot:default="slotProp">
      <i class="fas fa-check"></i>
      <span class="green">{{ slotProp.item }}</span>
      <span class="green">{{ slotProp }}</span>
    </template>
  </testslot>
</template>

<script setup>
// ======================书写整洁代码==========================//

// ====================引入模块部分=============================//
import { getCurrentInstance } from "vue";
import { ref } from "vue";
import { useStore } from "vuex";
import testslot from "@/components/TestSlot.vue";
// ====================引入模块结束=============================//

// ====================变量声明部分=============================//
const internalInstance = getCurrentInstance();
const gol = internalInstance.appContext.config.globalProperties; // 访问 globalProperties
const store = useStore();
const a = ref("");
const timeUtils = gol.$timeUtils;
a.value = store.state.user.count;
// ====================变量声明end=============================//

// ====================逻辑事件交互部分 ============================//

const onclick = () => {};
const onAaa = () => {};

// ====================逻辑事件事件交互end============================//

// ====================请求接口数据 ============================//

const getList = () => {};

// ====================请求接口end ============================//

// ====================其他start ============================//

// 这里可以写那些不知道要放在哪里的函数

// ====================其他end ============================//
</script>

<style scoped>
.green {
  color: aqua;
}
</style>
