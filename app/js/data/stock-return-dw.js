/*jslint nomen: true*/
/*global $,define,require,d3,crossfilter,MicroEvent,_,from */

define(['exports', 'data/sp500-annual-return'], function (exports, sp500AnnualReturn) {
    'use strict';

    var sp500Data = sp500AnnualReturn.data,
        stockReturn = {};
    MicroEvent.mixin(stockReturn);

    function transformData(data) {
        _.each(data, function (value) {
            value['S&P 500 Annual Return'] = value.AnnualReturn / 100;
        });
    }

    function calculateInvestmentReturn(initialInvestment, percentChanged) {
        return (100 + percentChanged) / 100 * initialInvestment;
    }

    function filterStockReturn(initialInvestment, startYear, isDollarCostAveraging) {
        var startIndex = _.findIndex(sp500Data, function (value) {
                return value.Year >= startYear;
            }),
            newData = sp500Data.slice(startIndex, sp500Data.length),
            extraInvestmentEachYear = isDollarCostAveraging ? initialInvestment : 0;

        _.each(newData, function (value, index) {
            var preIndex = index - 1,
                investment = preIndex < 0
                    ? calculateInvestmentReturn(initialInvestment, newData[0].AnnualReturn)
                    : calculateInvestmentReturn(newData[preIndex].Investment + extraInvestmentEachYear, newData[index].AnnualReturn);
            value.Investment = investment;
        });

        stockReturn.data = newData;
        stockReturn.trigger('change');
    }

    transformData(sp500Data);
    stockReturn.filterStockReturn = filterStockReturn;

    exports.stockReturn = stockReturn;
});
