/*global $,define,require,d3 */

define(function (require, exports, module) {
    'use strict';

    var chartUrl = {
        stockReturn: '/stock-return'
    };

    exports.name = 'GalleryCtrl';
    exports.controller = function ($scope, $location, $document, $timeout) {
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
            {id: 'stockReturn', label: 'Investment Return in S&P 500', isLoading: false}
        ];
    };
});