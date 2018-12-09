import angular from 'angular';

import { MultiplierController } from './multiplier';

export default angular.module('es6app', [])
  .controller('MultiplierController', MultiplierController)
  .name;
