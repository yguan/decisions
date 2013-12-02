/*global $,define,require,d3 */

define(function (require, exports, module) {
    'use strict';

    var chartUrl = {
        stockReturn: '/stock-return'
    };

    exports.name = 'GalleryCtrl';
    exports.controller = function ($scope, $location) {
        function getVizUrl(vizId) {
            return chartUrl[vizId];
        }

        $scope.openVisualization = function ($event) {
            var vizId = $($event.target).data('viz'),
                url = getVizUrl(vizId);
            $location.url(url);
        };

        $scope.visualizations = [
            {id: 'stockReturn'},
            {id: 2}
        ];
    };
});