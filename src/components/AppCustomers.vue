<template>
    <div>
        <h1>Customers</h1> 

        <table border=1>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Remove</th>
            </thead>
            <tbody>
                <tr v-for="(customer, index) in customers" :key="index">
                    <td>
                        <router-link :to="{name: 'latest-purchases'}">
                            {{ customer.firstName}} {{customer.lastName}}
                        </router-link> 
                    </td>
                    <td>{{ customer.email}}</td>
                    <td><button @click="removeCustomer(customer)">Remove</button></td>
                </tr>
            </tbody>
        </table><br>

        <router-link :to="{name: 'add-customer'}"><button>Add customer</button></router-link>

    </div>
   
</template>

<script>

import customersService from '../service/CustomersService.js';
import LatestPurchases from './LatestPurchases.vue';


export default {

    components: {
        LatestPurchases
    },

    data() {
        return {
            customers: customersService.list()
        }
    },

    methods: {
        removeCustomer(customer) {
            customersService.remove(customer);
        },


    },

    computed: {
        routeCustomer() {
            let findedCustomer = this.customers.find(customer => customer.id == this.$route.params.id);
            console.log(findedCustomer);
            return findedCustomer;
        }
        
    }
    
    
}
</script>

