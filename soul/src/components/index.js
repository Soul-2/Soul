
import myImage from './image.vue'
export default {
  install (Vue) {
    // Vue 是
    Vue.component(myImage.name, myImage)
  }
}
