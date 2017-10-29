/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2017-01-21 14:06
 * @description   Watcher
 */
import Dependence from './dependence'

export default class Watcher {
  constructor(data, key, fn) {
    this.data = data;
    this.key = key;
    this.computed = fn;
    // 记录当前正在注册的 watcher
    Dependence.current = this;
    // 首次获取值, 并实现双向绑定
    this.update();
    // 清空当前正在注册的 watcher
    Dependence.current = null;
  }

  update() {
    this.data[this.key] = this.computed.apply(this.data, arguments);
  }
}