'use strict';

angular.module('materialApp')
  .controller('DialogController', DialogController);

function DialogController($mdDialog) {
  var vm = this;

  vm.abrirDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'templates/dialog.tmpl.html',
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };
}
