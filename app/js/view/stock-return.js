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

        function filterStockReturn(initialInvestment, startYear) {
            stockReturn.filterStockReturn(initialInvestment, startYear);
            $scope.investmentReturn = stockReturn.data[stockReturn.data.length - 1].Investment;
        }

        function initChart() {
            var $chartContainer = $('#chart');
            if ($chartContainer.find('svg').length === 0) {
                filterStockReturn($scope.initialInvestment, $scope.startYear);
                chart.render('#chart', stockReturn);
            }
        }

        initChart();

        $scope.$watch('startYear', function (newVal, oldVal) {
            filterStockReturn($scope.initialInvestment, newVal);
        });

        $scope.$watch('initialInvestment', function (newVal, oldVal) {
            filterStockReturn(newVal, $scope.startYear);
        });
    };
});