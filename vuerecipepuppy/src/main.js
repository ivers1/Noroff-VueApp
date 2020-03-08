import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import recipe from './components/recipe.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: recipe
        }
    ]
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
