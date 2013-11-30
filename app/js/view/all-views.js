/*jslint nomen: true*/
/*global $,define,require,angular,document */

define(function (require, exports, module) {
    'use strict';

    var gallery = require('view/gallery'),
        visualization = require('view/visualization');

    function registerController(app, controller) {
        app.controller(controller.name, ['$scope', '$location', '$document', '$timeout', '$modal', controller.controller]);
    }

    function configViewRouting(app) {
        app.config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/gallery', {templateUrl: 'js/view/partial/gallery.html', controller: gallery.name})
                .when('/visualization', {templateUrl: 'js/view/partial/visualization.html', controller: visualization.name})
                .otherwise({redirectTo: '/gallery'});
        });
    }

    exports.init = function () {
        angular.element(document).ready(function () {
            var app = angular.module('decision', [
                'ngRoute',
                '$strap.directives'
            ]);

            configViewRouting(app);
            registerController(app, gallery);
            registerController(app, visualization);
            angular.bootstrap(document, ['decision']);
        });
    };

});