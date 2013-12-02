/*global $,define,require,d3 */

define(function (require, exports, module) {
    'use strict';

    var charts = {
        stockReturn: {
            render: require('chart/stock-return').render,
            data: require('data/stock-return-dw').stockReturn
        }
    };

    exports.getChart = function (chartId) {
        return charts[chartId];
    };
});