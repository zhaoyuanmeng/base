/*
 *@Author: 赵元达
 *@Date: 2022-04-25 14:25:32
 *@parms: 
 *@Description: 
*/
import { createStore } from 'vuex'
import user from './moudles/user'
 const store = createStore({
  modules:{
    user
  }
})
export default store


 