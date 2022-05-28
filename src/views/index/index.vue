<template>
  <div class="tree-wrapper">
    <div class="btn" @click="showNodes">点击获取选中节点key</div>
    <Tree :list="treeData"></Tree>
  </div>
</template>

<script>
import Tree from "@/components/Tree.vue";
import data from "./data.json";
export default {
  data() {
    return {
      treeData: data, // 全部节点
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() { 
      this.treeData = data;
    },
    showNodes() {
      // alert(this.$global.nodes);
    },
  },
  components: {
    Tree,
  },
};
</script>

<style></style>
