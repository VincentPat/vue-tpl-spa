import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import loading from '@/components/loading'
// import home from '@/components/home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        // {
        //     path: '/',
        //     name: 'loading',
        //     component: loading
        // },
        // {
        //     path: '/',
        //     name: 'home',
        //     component: home
        // }
    ]
})
