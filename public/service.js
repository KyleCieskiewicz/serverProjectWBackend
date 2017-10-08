angular.module('smoothieApp').service('service', function($http){
    this.getAllUsers = function() {
       return $http.get('/api/users/');
    }
});