const customers = [  
    {id: 1, firstName: 'Biljana', lastName: 'Jelaca', email: 'biljana@example.com', products: []},
    {id: 2, firstName: 'Ivana', lastName: 'Zonic', email: 'ivana@example.com', products: []},
    {id: 3, firstName: 'Marko', lastName: 'Mihajlovic', email: 'marko@example.com', products: []},
];

let nextId = 4;

class CustomersService {
    list() {
        return customers;
    }

    remove(customer) {
        customers.splice(customers.indexOf(customer), 1);
    }
}

const customersService = new CustomersService();

export default customersService;