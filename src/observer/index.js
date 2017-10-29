/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2017-10-29 22:02
 * @description   observer for data
 */

import Dependence from './dependence'

export default class Observer {
  constructor(data) {
    this.data = data

    Object.keys(data).forEach(function(key) {
      const dep = new Dependence()
      let value = data[key]
      Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
          if (Dependence.current) {
            dep.addWatcher()
          }
          return value
        },
        set: function(val) {
          value = val
          // 通知所有的 watcher 重新拉去数据完成更新
          dep.dispatch()
        }
      })
    })
  }
}

