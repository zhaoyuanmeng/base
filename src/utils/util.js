export function timeFix() {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

export function welcome() {
  // const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
  const arr = ['欢迎光临', '欢迎光临', '欢迎光临', '欢迎光临']
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent() {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

export function handleScrollHeader(callback) {
  let timer = 0

  let beforeScrollTop = window.pageYOffset
  callback = callback || function () { }
  window.addEventListener(
    'scroll',
    event => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        let direction = 'up'
        const afterScrollTop = window.pageYOffset
        const delta = afterScrollTop - beforeScrollTop
        if (delta === 0) {
          return false
        }
        direction = delta > 0 ? 'down' : 'up'
        callback(direction)
        beforeScrollTop = afterScrollTop
      }, 50)
    },
    false
  )
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate(id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}

export function millsToTime(mills) {
  if (!mills) {
    return ''
  }
  const s = mills / 1000
  if (s < 60) {
    return s.toFixed(0) + ' 秒'
  }
  const m = s / 60
  if (m < 60) {
    return m.toFixed(0) + ' 分钟'
  }
  const h = m / 60
  if (h < 24) {
    return h.toFixed(0) + ' 小时'
  }
  const d = h / 24
  if (d < 30) {
    return d.toFixed(0) + ' 天'
  }
  const month = d / 30
  if (month < 12) {
    return month.toFixed(0) + ' 个月'
  }
  const year = month / 12
  return year.toFixed(0) + ' 年'
};
// 获取数据id,返回id数组
export function getIds(data) {
  const ids = []
  for (var i = 0; i < data.length; i++) {
    ids.push(data[i].id)
  }
  return ids
}

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */

export const debounce = (func, wait, immediate) => {
  let timeout
  return function () {
    let context = this
    let args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  }
}

