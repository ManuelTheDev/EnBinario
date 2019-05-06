var app = angular.module('app');

app.config(function($routeProvider){
    $routeProvider
        .when('/nosotros', {
            templateUrl: 'app/modules/Nosotros.html?v=' + Date.now(),
            controller: 'NosotrosController'
        })

        .otherwise({
            redirectTo: '/index'
        })
})