angular.module('smoothieApp').controller('getStartedController', function($scope, service){

    $scope.smoothieUser = {};
    
    $scope.next = function(smoothieUser) {

        // console.log($scope.smoothieUser);
        if (($scope.smoothieUser.proteinBase) && ($scope.smoothieUser.vege) && ($scope.smoothieUser.fruit)) {
            // console.log("scope.next", smoothieUser)
            // console.log(smoothieUser);
            service.addUser(smoothieUser).then(
                function(response) {
                    // console.log(response);
                    $scope.users = response;
                    
                }
            );

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


    $scope.next = function(smoothieUser) {
        
                // console.log($scope.smoothieUser);
                if (($scope.smoothieUser.proteinBase) && ($scope.smoothieUser.vege) && ($scope.smoothieUser.fruit)) {
                    // console.log("scope.next", smoothieUser)
                    // console.log(smoothieUser);
                    service.addUser(smoothieUser).then(
                        function(response) {
                            // console.log(response);
                            $scope.users = response;
                            
                        }
                    );
        
                }
                else {
                    alert('Smoothie specifications not selected!')
                }
            };
});

