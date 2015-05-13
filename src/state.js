'use strict';

angular.module('materialApp', ['ngMaterial', 'ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.otherwise('/button');

    $routeProvider.when('/form', {
      templateUrl: 'templates/form.html',
      controller: 'FormController',
      controllerAs: 'formCtrl'
    });

    $routeProvider.when('/tabs', {
      templateUrl: 'templates/tabs.html'
    });

    $routeProvider.when('/button', {
      templateUrl: 'templates/buttons.html'
    });

    $routeProvider.when('/chips', {
      templateUrl: 'templates/chips.html',
      controller: 'ChipsController',
      controllerAs: 'ctrl'
    });

    $routeProvider.when('/dialog', {
      templateUrl: 'templates/dialog.html',
      controller: 'DialogController',
      controllerAs: 'ctrl'
    });
  });
