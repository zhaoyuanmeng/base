import { createApp } from "vue";
import App from "./App.vue";

// 导入组件库
import "ant-design-vue/dist/antd.css";
// import ant from "./hooks/useAntComponent";

// // 引入全局组件
import Antd from "ant-design-vue";

// 引入dayjs插件
import dayjs from "./hooks/useTime";
// 引入状态管理
import store from "./store/index";

// 引入路由
import router from "./router/index";

createApp(App)
  // .use(ant)
  .use(Antd)
  .use(dayjs)
  .use(store)
  .use(router)
  .mount("#app");
