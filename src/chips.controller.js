'use strict';

angular.module('materialApp')
  .controller('ChipsController', function($timeout) {
    this.myChips = [{
      name: 'Luke',
      type: 'Jedi'
    }, {
      name: 'Obi-wan',
      type: 'Jedi'
    }, {
      name: 'Darth Vader',
      type: 'Sith'
    }];

    this.novoPersonagem = function(chip) {
      return {
        name: chip,
        type: 'Jedi'
      };
    }
  });
