/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2017-01-21 15:13
 * @description   依赖收集
 */

// 消费者类
export default class Dependence {
  constructor() {
    this.subsDep = new Set()
  }

  // 添加订阅者
  addWatcher() {
    this.subsDep.add(Dependence.current)
  }

  // 分发
  dispatch() {
    this.subsDep.forEach((item) => item.update())
  }
}

Dependence.current = null