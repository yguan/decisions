/*global $,define,require,d3 */

define(function (require, exports, module) {
    'use strict';

    exports.name = 'VisualizationCtrl';
    exports.controller = function ($scope, $location) {
        $scope.getId = function () {
            return $location.search().id;
        };

        $scope.back = function () {
            $location.url('/gallery');
        };
    };
});