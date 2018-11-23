<template>
    <div>
        <h1>Customers</h1> 

        <table border=1>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Remove</th>
            </thead>
            <tbody>
                <tr v-for="(customer, index) in customers" :key="index">
                    <td>{{ customer.firstName}}</td>
                    <td>{{ customer.lastName}}</td>
                    <td>{{ customer.email}}</td>
                    <td><button @click="removeCustomer(customer)">Remove</button></td>
                </tr>
            </tbody>
        </table>
    </div>
   
</template>

<script>

import customersService from '../service/CustomersService.js';

export default {
    data() {
        return {
            customers: customersService.list()
        }
    },

    methods: {
        removeCustomer(customer) {
            customersService.remove(customer);
        }
    }
    
    
}
</script>

