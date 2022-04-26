/*
 *@Author: 赵元达
 *@Date: 2022-04-22 14:31:46
 *@parms: 
 *@Description: 全局挂载dayjs
*/
import dayjs from 'dayjs'

/*
 *@Author: 赵元达
 *@Date: 2022-04-26 15:46:38
 *@parms: 
 *@Description: 时间的工具类 以后常用到的都可以写到这里
*/
let timeUtils = {
  // 返回当天开始时间
  getCurrentStart(){
    return dayjs().format("YYYY-MM-DD") + " " + "00:00:00"
  },
  // 返回当天结束时间
  getCurrentEnd(){
    return dayjs().format("YYYY-MM-DD") + " " + "23:59:59"
  },
  //把dayjs返回去
  getDayjs(){
    return dayjs
  }
}

const time = {
  // 这里就可以全局引用了 循环引入
  install(Vue){
    Vue.config.globalProperties.$timeUtils = timeUtils;
  }
}



export default time