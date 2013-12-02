/*global $,define,require,d3,dimple */

define(function (require, exports, module) {
    'use strict';

    function setBounds(chart, widthBound) {
        chart.setBounds(50, 20, widthBound, 320);
    }

    function render(container, stockReturns) {
        var data = stockReturns.data,
            barWidth = 20,
            maxBars = data.length,
            maxWidthBound = barWidth * maxBars,
            svg = dimple.newSvg(container, maxWidthBound + 120, 400),
            chart = new dimple.chart(svg, data),
            y,
            yearAxis,
            sp500Return,
            investmentAxis;

        setBounds(chart, maxWidthBound);
        yearAxis = chart.addCategoryAxis('x', 'Year');
        yearAxis.tickFormat = 'g';
        sp500Return = chart.addMeasureAxis('y', 'S&P 500 Annual Return (%)');
        sp500Return.overrideMin = -40;
        sp500Return.overrideMax = 40;
        chart.addSeries('', dimple.plot.bar, [yearAxis, sp500Return]);

        investmentAxis = chart.addMeasureAxis('y', 'Investment');
        chart.addSeries('', dimple.plot.line, [yearAxis, investmentAxis]);
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