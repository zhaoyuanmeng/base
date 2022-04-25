/*
 *@Author: 赵元达
 *@Date: 2022-04-25 14:44:02
 *@parms: 
 *@Description: user 模块
*/

const state = () => ({
  items: [],
  count:111,
  checkoutStatus: null
})

// getters
const getters = {
  cartProducts: (state) => {
    return state.checkoutStatus
  },
}

// actions  这里一般是做异步请求的 一些api请求
const actions = {
 
}

// mutations
const mutations = {
  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  setCartItems (state, { items }) {
    state.items = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}