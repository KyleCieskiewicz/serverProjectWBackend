angular.module('smoothieApp').controller('getStartedController', function($scope, service){

    $scope.smoothieUser = {};
    
    $scope.next = function() {
        if (($scope.smoothieUser.proteinBase) && ($scope.smoothieUser.vege) && ($scope.smoothieUser.fruit)) {


        }
        else {
            alert('Smoothie specifications not selected!')
        }
    };

    service.getAllUsers().then(
        function(response) {

            $scope.users = response.data;
            
        }
    );

    $scope.test = 'test';
});