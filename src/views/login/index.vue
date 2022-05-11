<template>
  <a-tree
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
    checkable
    :tree-data="treeData"
  >
    <template #title="{ title, key }">
      <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
      <template v-else>
        <div @mouseenter="asd(key)">
          {{ title }}
        </div>
      </template>
    </template>
  </a-tree>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        disabled: true,
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
            disableCheckbox: true,
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            key: "0-0-1-0",
            title: "sss",
          },
        ],
      },
    ],
  },
];
export default defineComponent({
  setup() {
    const expandedKeys = ref(["0-0-0", "0-0-1"]);
    const selectedKeys = ref(["0-0-0", "0-0-1"]);
    const checkedKeys = ref(["0-0-0", "0-0-1"]);
    const asd = (key) => {
      console.log("aasdasd", key);
    };

    watch(expandedKeys, () => {
      console.log("expandedKeys", expandedKeys);
    });
    watch(selectedKeys, () => {
      console.log("selectedKeys", selectedKeys);
    });
    watch(checkedKeys, () => {
      console.log("checkedKeys", checkedKeys);
    });
    return {
      treeData,
      expandedKeys,
      selectedKeys,
      checkedKeys,
      asd,
    };
  },
});
</script>
