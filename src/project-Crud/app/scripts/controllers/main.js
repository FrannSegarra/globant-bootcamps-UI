'use strict';

/**
 * @ngdoc function
 * @name projectCrudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectCrudApp
 */
angular.module('projectCrudApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http({
      method: 'get',
      url: '../products.json'
    }).then(function (response) { 
      $scope.products = response.data;
    },function(error){
      alert(error);
    });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
