import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  console.log('实例化传入的参数 Vue', options)
  if (process.env.NODE_ENV !== 'production' &&
    // instanceof: 来检测某个对象是不是另一个对象的实例
    // 判断当前是否是用new 实例化
    /**
     * 简单模拟
     * function instanceof (A, B) {
     *  return A.__proto__ === b.prototype
     * }
    */
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

/**
 * 一系列的vue构建，除去他的前置条件，就是在他的原型链上加方法和属性供内部实现
*/

export default Vue
