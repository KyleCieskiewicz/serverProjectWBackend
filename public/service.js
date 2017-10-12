angular.module('smoothieApp').service('service', function($http){
<<<<<<< HEAD

    this.getAllOrders = function() {
       return $http.get('/api/orders/');
    },

    this.addOrder = function(smoothieOrder) {
        
        // console.log("service", smoothieOrder);
        return $http.post('/api/orders', smoothieOrder);
    
    },

    this.addUser = function(smoothieUser) {
        
        // console.log("service", smoothieUser);
        return $http.post('/api/users', smoothieUser);
    
=======
    this.getAllUsers = function() {
       return $http.get('/api/users/');
>>>>>>> parent of ab4eb86... able to add to database
    }
});