const axios = require('axios');


module.exports = {
    add: (a,b) => a+b,
    createUser: () => {
        const firstName = "Isfar";
        const lastName = "Uddin";
        const user = {firstName,lastName}
        return user;
    },

    fetchUser : () => {
        return axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err => 'error');
    }
};