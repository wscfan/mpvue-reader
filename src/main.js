import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const app = new Vue(App)
app.$mount()

export default {
  config: {
    "window": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "蜗牛图书",
      "navigationBarTextStyle": "black"
    }
  }
}
