'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('myapp1App.login', [])
  .controller('LoginController', LoginController)
  .name;
