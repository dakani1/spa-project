import Loading from './loading.vue'
export default {
  install: (Vue, options) => {
    let ComponentLoading = Vue.extend(Loading)
    let instance = new ComponentLoading({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
    Vue.prototype.$loading1 = function (options) {
      console.log('instance.data:')
      instance.text = (options && options.text) ? options.text : '加载中'
    }
  }
}
