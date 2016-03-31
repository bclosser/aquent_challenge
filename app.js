//app.js
angular.module('aquentChallenge', [])

    .controller('appController', function ($scope, $http) {
        $scope.sort = 'firstName';
        $scope.sortReverse = false;
        $scope.search = '';
        $scope.members = [];
        $scope.selectedMember = null;
        $scope.selectedRow = null;
        $scope.loadingMembers = true;

        //load list of members from API
        $http.get('http://private-a73e-aquentuxsociety.apiary-mock.com/members')
        .success(function (data, status, headers, config) {
            $scope.members = data;
            $scope.loadingMembers = false;
        })
        .error(function (error, status, headers, config) {
            console.log(status);
            console.log("Error occured");
        });
    
        $scope.selectMember = function(member) {
            $scope.selectedMember = member;
        };
    });