/*global $,define,require,d3 */

define(function (require, exports, module) {
    'use strict';

    var chartUrl = {
        stockReturnOneTime: '/stock-return/',
        stockReturnDollarCostAvg: '/stock-return/dca'
    };

    exports.name = 'GalleryCtrl';
    exports.controller = function ($scope, $location, $routeParams, $document, $timeout) {
        function getVizUrl(vizId) {
            return chartUrl[vizId];
        }

        $scope.openVisualization = function (viz) {
            var url = getVizUrl(viz.id);
            viz.isLoading = true;
            $timeout(function () {
                $location.url(url);
            }, 100);
        };

        $scope.visualizations = [
            {id: 'stockReturnOneTime', label: 'One-time Investment Return in S&P 500', isLoading: false},
            {id: 'stockReturnDollarCostAvg', label: 'Dollar Cost Averaging Investment Return in S&P 500', isLoading: false}
        ];
    };
});