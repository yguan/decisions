/*global $,define,require,d3 */

define(function (require, exports, module) {
    'use strict';

    var chartRepository = require('view/chart-repository');

    exports.name = 'VisualizationCtrl';
    exports.controller = function ($scope, $location) {
        $scope.getId = function () {
            return $location.search().id;
        };

        $scope.back = function () {
            $location.url('/gallery');
        };

        $('#charts').empty();
        var chart = chartRepository.getChart('stockReturn');
        chart.render('#charts', chart.data);
    };
});