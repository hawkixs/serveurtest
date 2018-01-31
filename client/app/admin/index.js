'use strict';

import angular from 'angular';
import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('myapp1App.admin', ['myapp1App.auth', 'ui.router'])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
