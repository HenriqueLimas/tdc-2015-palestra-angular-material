'use strict';

angular.module('materialApp')
  .controller('FormController', function($timeout) {
    var vm = this;

    vm.salvar = function() {
      vm.isSaving = true;

      $timeout(function() {
        vm.isSaving = false;
      }, 3000);
    };
  });
