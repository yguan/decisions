/*jslint nomen: true*/
/*global $,define,require,angular,document */

define(function (require, exports, module) {
    'use strict';

    var gallery = require('view/gallery'),
        stockReturn = require('view/stock-return');

    function registerController(app, controller) {
        app.controller(controller.name, ['$scope', '$location', '$document', '$timeout', '$modal', controller.controller]);
    }

    function configViewRouting(app) {
        app.config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/gallery', {templateUrl: 'js/view/partial/gallery.html', controller: gallery.name})
                .when('/stock-return', {templateUrl: 'js/view/partial/stock-return.html', controller: stockReturn.name})
                .otherwise({redirectTo: '/gallery'});
        });
    }

    exports.init = function () {
        angular.element(document).ready(function () {
            var app = angular.module('decision', [
                'ngRoute',
                'ngAnimate',
                '$strap.directives'
            ]);

            configViewRouting(app);
            registerController(app, gallery);
            registerController(app, stockReturn);
            angular.bootstrap(document, ['decision']);
        });
    };

});