/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2017-10-29 20:44
 * @description   root
 */
import  Observer from './observer'
import  Watcher from './observer/watcher'

export default window.MVVM = class MVVM {
  constructor(opt) {
    Object.assign(this, opt)
    this.initData()
    this.initComputed()
  }

  initData() {
    new Observer(this.data)
    Object.keys(this.data).forEach((item) => {
      Object.defineProperty(this, item, {
        enumerable: true,
        configurable: true,
        get: function() {
          return this.data[item]
        },
        set: function(val) {
          this.data[item] = val
        }
      })
    })
  }

  initComputed() {
    Object.keys(this.computed).forEach((item) => {
      new Watcher(this, item, this.computed[item])
    })
  }
}