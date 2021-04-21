import Vue from 'vue'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Vant 组件
import { NavBar } from 'vant';
import { Button } from 'vant'; // 懒加载
import { Swipe, SwipeItem } from 'vant'; // 懒加载
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')