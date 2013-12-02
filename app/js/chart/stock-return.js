/*global $,define,require,d3,dimple */

define(function (require, exports, module) {
    'use strict';

    function setBounds(chart, widthBound) {
        chart.setBounds(70, 20, widthBound, 470);
    }

    function render(container, stockReturns) {
        var data = stockReturns.data,
            barWidth = 20,
            maxBars = data.length,
            maxWidthBound = barWidth * maxBars,
            svg = dimple.newSvg(container, maxWidthBound + 160, 550),
            chart = new dimple.chart(svg, data),
            y,
            yearAxis,
            sp500ReturnAxis,
            investmentAxis;

        setBounds(chart, maxWidthBound);
        yearAxis = chart.addCategoryAxis('x', 'Year');
        yearAxis.tickFormat = 'g';
        sp500ReturnAxis = chart.addMeasureAxis('y', 'S&P 500 Annual Return');
        sp500ReturnAxis.tickFormat = '%';
        sp500ReturnAxis.overrideMin = -0.4;
        sp500ReturnAxis.overrideMax = 0.4;
        chart.addSeries('Year', dimple.plot.bar, [yearAxis, sp500ReturnAxis]);

        investmentAxis = chart.addMeasureAxis('y', 'Investment');
        investmentAxis.tickFormat = '$,.0f';
        chart.addSeries(' ', dimple.plot.line, [yearAxis, investmentAxis]);
        chart.assignColor(' ', 'green');
        chart.draw();

        // presidents triggers change event when presidentDw.filterByBeforeBirthYear is called
        stockReturns.bind('change', function () {
            chart.data = stockReturns.data;
            setBounds(chart, chart.data.length * barWidth);
            chart.draw();
        });
    }

    exports.render = render;
});