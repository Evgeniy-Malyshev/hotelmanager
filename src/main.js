import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

new Vue({
    name: '',
    router,
    store,
    vuetify,
    render: (h) => h(App)
}).$mount('#app');
