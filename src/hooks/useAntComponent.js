/*
 *@Author: 赵元达
 *@Date: 2022-04-22 14:31:46
 *@parms: 
 *@Description: 按需导入组件
*/
import { Button, message } from 'ant-design-vue';


const ant = {
  // 这里就可以全局引用了 循环引入
  install(Vue){
    Vue.use(Button)
    Vue.use(message)
    Vue.config.globalProperties.$message = message;
  }
}



export default ant