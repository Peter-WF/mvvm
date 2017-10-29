/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2017-10-29 22:55
 * @description
 */

import MVVM from '../src'

window.test = new MVVM({
  data: {
    foo: 1
  },
  computed: {
    bar() {
      return this.foo * 2
    }
  }
})