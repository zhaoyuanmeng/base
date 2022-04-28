<template>
  <ul class="ul-wrapper">
    <!-- 包裹层-->
    <li v-for="item in list" :key="item.key">
      <!-- 遍历-->
      <div>
        <!-- 是否展开图标-->
        <!-- <img class="icon" v-show="item.children" @click="changeShow" /> -->
        <!-- CheckBox-->
        <input
          type="checkbox"
          :name="item.key"
          @click="clickbox"
          :checked="item.checked"
          :disabled="item.disabled"
        />
        <!-- :checked="item.checked" -->
        <!-- :checked="isChecked(item.key)" -->

        <div class="checkbox-title">{{ item.title }}</div>
        <!-- CheckBox内容-->
      </div>
      <tree v-if="showChildren" :list="item.children"></tree>
      <!-- 遍历children-->
    </li>
  </ul>
</template>

<script>
export default {
  name: "tree",
  props: {
    list: {
      // 所有树节点
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      showChildren: true, // 是否展开根目录
      // nodes: ["1", "1-1", "1-1-2", "1-2-2"],
      nodes: [],
    };
  },
  computed: {
    // computed属性计算展开图标
    imgUrl() {
      return this.showChildren ? "down.png" : "right.png";
    },
  },
  methods: {
    clickbox(e) {
      // 点击CheckBox时需要加入或删除已选中nodes的节点数组中
      const checked = e.target.checked;
      const key = e.target.name;
      const nodes = this.nodes; // nodes是全局变量，便于递归组件记录选中节点
      if (checked) {
        if (!nodes.includes(key)) {
          console.log("ss", key);
          let list = this.list;
          list[0].children[0].checked = true;
          list[0].children[1].checked = true;
          list[0].children[2].checked = true;
          list[0].children[0].children[0].checked = true;
          list[0].children[0].children[1].checked = true;
          list[0].children[0].children[2].checked = true;
          this.list = list;
          return;
          this.nodes.push(key);
        }
      } else {
        let list = this.list;
        list[0].children[0].checked = false;
        list[0].children[1].checked = false;
        list[0].children[2].checked = false;
        list[0].children[0].children[0].checked = false;
        list[0].children[0].children[1].checked = false;
        list[0].children[0].children[2].checked = false;
        this.list = list;
        return;
        this.nodes = nodes.filter((item) => {
          return key !== item;
        });
      }
    },
    aaaa(e) {
      // 点击CheckBox时需要加入或删除已选中this.nodes的节点数组中
      const checked = e.target.checked;
      const key = e.target.name;
      const nodes = this.nodes; // this.nodes是全局变量，便于递归组件记录选中节点
      if (checked) {
        if (!nodes.includes(key)) {
          this.nodes.push(key);
        }
      } else {
        this.nodes = nodes.filter((item) => {
          return key !== item;
        });
      }
      console.log("移入", key);
    },
    changeShow() {
      // 点击是否展开根目录，当前状态取反即可
      this.showChildren = !this.showChildren;
    },
    isChecked(key) {
      console.log("asdasda", key);
      return this.nodes.includes(key);
    },
  },
};
</script>

<style lang="stylus">
ul li {
  list-style: none
}
.ul-wrapper                            // ul包裹层，每层需要向右偏移30px
  margin 10px 30px 0
  .checkbox-title, .icon
    display inline-block
    vertical-align middle
  .icon
    margin-left -20px
    height 18px
    width 18px

input[type="checkbox"]                  // CheckBox样式修改
  position relative
  display inline-block
  vertical-align middle
  padding 0
  margin-right 5px
  height 18px
  width 18px
  border 1px solid #ccc
  border-radius 3px
input[type="checkbox"]:checked::before // CheckBox选中状态时样式修改
  position absolute
  top 0
  left 0
  padding-left 2px
  height 15px
  width 13px
  font-size 12px
  font-weight: bold;
  background #1296db
  color #fff
  border-radius 3px
  border 0
input[type="checkbox"]:disabled::before // CheckBox禁用状态时样式修改
  position absolute
  top 0
  left 0
  padding-left 2px
  content: "";
  height 15px
  width 13px
  font-size 12px
  font-weight: bold;
  background #ccc
  color #fff
  border-radius 3px
  border 0
</style>
