/*global $,define,require,d3 */

define(function (require, exports, module) {
    'use strict';

    var chart = require('chart/stock-return'),
        stockReturn = require('data/stock-return-dw').stockReturn;

    exports.name = 'StockReturnCtrl';
    exports.controller = function ($scope, $location) {
        $scope.getId = function () {
            return $location.search().id;
        };

        $scope.back = function () {
            $location.url('/gallery');
        };

        $scope.initialInvestment = 10000;
        $scope.startYear = 1970;

        stockReturn.filterStockReturn($scope.initialInvestment, $scope.startYear);
        $scope.investmentReturn = stockReturn.data[stockReturn.data.length - 1].Investment;

        $('#chart').empty();
        chart.render('#chart', stockReturn);
    };
});