angular.module('MainCtrl', [])
    .controller('MainController', function ($scope) {

        $scope.tagline = 'To the moon and back!';

    })
    .controller('UserController', ['$scope', 'dataFactory', function ($scope, dataFactory) {
        $scope.signup = 'Gogogo!';
        $scope.user = {}
        $scope.userCounter = 0;

        $scope.status;
        $scope.users;

        getUsers();

        function getUsers() {
            dataFactory.getUsers()
                .then(function (response) {
                    $scope.users = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load users data: ' + error.message;
                });
        }

        $scope.insertUser = function () {
            dataFactory.insertUser($scope.user)
                .then(function (response) {
                    $scope.status = 'Inserted Customer! Refreshing customer list.';
                    $scope.users.push($scope.user);
                }, function (error) {
                    $scope.status = 'Unable to insert customer: ' + error.message;
                });
        };


    }]);
