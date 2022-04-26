/*
 *@Author: 赵元达
 *@Date: 2022-04-26 15:48:47
 *@parms: 
 *@Description: 返回vue全局挂载的对象  这样写不行 会报错
*/
import { getCurrentInstance } from "vue";
const internalInstance = getCurrentInstance();
console.log(internalInstance,'sss');
export default gol = internalInstance.appContext.config.globalProperties; 

