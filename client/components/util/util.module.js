'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('myapp1App.util', [])
  .factory('Util', UtilService)
  .name;
