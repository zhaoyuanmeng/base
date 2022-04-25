/*
 *@Author: 赵元达
 *@Date: 2022-04-25 09:18:20
 *@parms: 
 *@Description: 挂在全局的组件 再这里面再写了
*/

import HelloWorld from '@/components/HelloWorld.vue'

const global = {
  install(app) {
    app.component('HelloWorld', HelloWorld)
  }
}

export default global