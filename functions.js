module.exports = {
    add: (a,b) => a+b,
    createUser: () => {
        const firstName = "Isfar";
        const lastName = "Uddin";
        const user = {firstName,lastName}
        return user;
    }
};