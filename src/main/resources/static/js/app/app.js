var app = angular.module('streamLens', ['ui.router', 'ngStorage']);

app.constant('urls', {
    BASE: 'http://localhost:8080/StreamLensApp',
    USER_SERVICE_API : 'http://localhost:8080/StreamLensApp/api/user/'
});

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/login',
                controller: 'UserController',
                controllerAs: 'ctrl',
                resolve: {
                    users: function ($q, UserService) {
                        console.log('Load all users');
                        var deferred = $q.defer();
                        UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    }
]);