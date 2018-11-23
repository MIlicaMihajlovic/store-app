import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter);


const routes = [
    {path: '/customers', component: AppCustomers},
    {path: '/products', component: AppProducts}
];

const route = new VueRouter ({
  routes
});

new Vue({
  render: h => h(App),
}).$mount('#app')
