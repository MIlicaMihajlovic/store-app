import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import AppCustomers from './components/AppCustomers.vue';
import AddCustomers from './components/AddCustomers.vue'
import AppProducts from './components/AppProducts.vue';
import LatestPurchases from './components/LatestPurchases.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);


const routes = [
    {path: '/', redirect: '/customers'},
    {path: '/customers', component: AppCustomers},
    {path: '/customers/:id', component: LatestPurchases, name: 'latest-purchases'},
    {path: '/add-customer', component: AddCustomers, name: 'add-customer'},
    {path: '/products', component: AppProducts}
   
];

const router = new VueRouter ({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
