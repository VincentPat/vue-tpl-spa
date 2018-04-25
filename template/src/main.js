{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
{{#element}}
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
{{/element}}
import '@/style/main.scss';
import '@/style/vue-transition.scss';
import '@/style/animation.scss';
{{#eventbus}}
import bus from '@/plugin/bus';
{{/eventbus}}
import App from './App'
{{#router}}
import router from './router'
{{/router}}

{{#element}}
Vue.use(ElementUI);
{{/element}}
{{#eventbus}}
Vue.use(bus);
{{/eventbus}}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    {{#router}}
    router,
    {{/router}}
    {{#if_eq build "runtime"}}
    render: h => h(App)
    {{/if_eq}}
    {{#if_eq build "standalone"}}
    components: { App },
    template: '<App/>'
    {{/if_eq}}
})
