angular.module('smoothieApp').service('service', function($http){

    this.getAllUsers = function() {
       return $http.get('/api/users/');
    },

    this.addUser = function(smoothieUser) {
        
        // console.log("service", smoothieUser);
        return $http.post('/api/users', smoothieUser);
    //     .then(response=>{
    //         // console.log("service response:", response);
    //         // return response.data;
    //  })
    }
});