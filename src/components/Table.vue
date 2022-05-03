<template>
  <div class="table-wrapper">
    <table class="table" :class="{ border, strip }">
      <!-- 表头 -->
      <thead>
        <tr>
          <th style="width: 50px">
            <input
              type="checkbox"
              :checked="checkAllStatus"
              ref="checkAll"
              @change="changeAll"
            />
          </th>
          <th v-for="col in columns" :key="col.key">{{ col.title }}</th>
        </tr>
      </thead>
      <!-- 表体 -->
      <tbody>
        <tr v-for="row in data" :key="row.id">
          <td style="width: 50px">
            <!-- 这里面的$event 名字不能写错不然就拿不到信息了 -->
            <input
              type="checkbox"
              @change="changeItem(row, $event)"
              :checked="isCheck(row)"
            />
          </td>
          <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "table",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    border: {
      type: Boolean,
      default: false,
    },
    strip: {
      type: Boolean,
      default: false,
    },
    seleItmes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  computed: {
    checkAllStatus() {
      return this.data.length === this.seleItmes.length;
    },
  },
  watch: {
    seleItmes() {
      if (this.seleItmes.length != this.data.length) {
        if (this.seleItmes.length != 0) {
          // 此时应该是半选的状态
          console.log("半选");
          return (this.$refs.checkAll.indeterminate = true);
        }
      }
      this.$refs.checkAll.indeterminate = false;
    },
  },
  mounted() {},

  methods: {
    // 深拷贝
    deepClone(obj) {
      if (obj === null) return obj;
      if (obj instanceof Date) return new Date(obj);
      if (obj instanceof RegExp) return new RegExp(obj);
      if (typeof obj !== "object") return obj;
      let cloneObj = new obj.constructor();
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          // 实现一个递归拷贝
          cloneObj[key] = this.deepClone(obj[key]);
        }
      }
      return cloneObj;
    },
    // 单选
    changeItem(row, e) {
      let obj = this.deepClone(this.seleItmes);
      if (e.target.checked) {
        obj.push(row);
      } else {
        // 删除这一项
        let idx = obj.findIndex((item) => item.id == row.id);
        obj.splice(idx, 1);
      }
      //传给父组件值
      this.$emit("update:seleItmes", obj);
    },
    // 全选
    changeAll(e) {
      if (e.target.checked) {
        this.$emit("update:seleItmes", this.data);
      } else {
        this.$emit("update:seleItmes", []);
      }
    },
    // 判断
    isCheck(row) {
      return this.seleItmes.some((item) => {
        return item.id == row.id;
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
*{
  margin: 0;
  padding:0;
  box-sizing: border-box
}
.table-wrapper {
  width: 80vh;
  margin: 0 auto;
}
table {
  width: 100%;
  border: 1px solid #ccc;
  border-spacing: 0;
  border-collapse: collapse;
  padding: 5px;
  &.border {
    border: 1px solid #ccc;
    th,td{
      border: 1px solid #ccc;
    }
  }
  &.strip{
    tbody{
      tr:nth-child(even){
        background #eee
      }
    }
  }
  th {
    background-color: #ccc;
  }
  th,
  td {
    border-bottom: 1px solid #ccc;
    text-align: left;
  }
}
</style>
