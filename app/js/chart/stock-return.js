/*global $,define,require,d3,dimple */

define(function (require, exports, module) {
    'use strict';

    function setBounds(chart, widthBound) {
        chart.setBounds(70, 20, widthBound, 470);
    }

    function render(container, stockReturns) {
        var data = stockReturns.data,
            maxInvestment = _.max(data, function(value){ return value.Investment; }).Investment,
            barWidth = 20,
            maxBars = data.length,
            maxWidthBound = barWidth * maxBars,
            svg = dimple.newSvg(container, maxWidthBound + 160, 550),
            chart = new dimple.chart(svg, data),
            y,
            yearAxis,
            sp500ReturnAxis,
            investmentAxis,
            investmentSeries;

        setBounds(chart, maxWidthBound);
        yearAxis = chart.addCategoryAxis('x', 'Year');
        yearAxis.tickFormat = 'g';
        sp500ReturnAxis = chart.addMeasureAxis('y', 'S&P 500 Annual Return');
        sp500ReturnAxis.tickFormat = '.3p';
        sp500ReturnAxis.overrideMin = -0.8;
        sp500ReturnAxis.overrideMax = 0.4;
        chart.addSeries('Year', dimple.plot.bar, [yearAxis, sp500ReturnAxis]);

        investmentAxis = chart.addMeasureAxis('y', 'Investment');
        investmentAxis.overrideMin = 0;
        investmentAxis.overrideMax = maxInvestment * 3;
        investmentAxis.tickFormat = '$,.0f';
        investmentSeries = chart.addSeries(' ', dimple.plot.bar, [yearAxis, investmentAxis]);
        chart.assignColor(' ', '#348017');
        chart.draw();

        stockReturns.bind('change', function () {
            data = stockReturns.data;
            chart.data = data;
            maxInvestment = _.max(data, function(value){ return value.Investment; }).Investment;
            investmentAxis.overrideMax = maxInvestment * 3;
            setBounds(chart, chart.data.length * barWidth);
            chart.draw();
        });
    }

    exports.render = render;
});