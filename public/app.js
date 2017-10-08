var app = angular.module('smoothieApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {

            url: '/home',
            templateUrl: 'views/partial-home.html'
        })

        .state('getStarted', {
            url: '/getStarted',
            templateUrl: 'views/partial-getStarted.html',
            controller: 'getStartedController'
            
        })

        .state('profile', {
            url: '/profile',
            templateUrl: 'views/partial-profile.html',
            controller: 'getStartedController'
        })

        .state('order', {
            url: '/order',
            templateUrl: 'views/partial-order.html',
            controller: 'orderController'
        });



});