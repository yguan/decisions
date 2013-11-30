/*global $,define,require,d3 */

define(function (require, exports, module) {
    'use strict';

    exports.name = 'GalleryCtrl';
    exports.controller = function ($scope, $location) {
        function getVizUrl(vizId) {
            return '/visualization?id=' + vizId;
        }

        $scope.openVisualization = function ($event) {
            var vizId = $($event.target).data('viz'),
                url = getVizUrl(vizId);
            $location.url(url);
        }
        $scope.visualizations = [
            {id: 1},
            {id: 2}
        ];
    };
});