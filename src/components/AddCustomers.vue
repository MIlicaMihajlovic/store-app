<template>
    <div>
        <form @submit.prevent="addNewCustomer()">
            <label>First name</label><br>
            <input v-model="newCustomer.firstName" /><br>
            

            <label>Last name</label><br>
            <input v-model="newCustomer.lastName" /><br>
          

            <label>Email</label><br>
            <input v-model="newCustomer.email" /><br>

            <br><button type="submit">Add customer</button>
        
        </form>
    </div>
</template>

<script>

import customersService from '../service/CustomersService.js'

export default {

    data() {
        return {
            newCustomer: {}
        }
    },

    methods: {
        addNewCustomer() {
            customersService.addCustomer(this.newCustomer);
            this.newCustomer = {};
        }
    }
    
}
</script>

