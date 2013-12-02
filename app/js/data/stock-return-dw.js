/*jslint nomen: true*/
/*global $,define,require,d3,crossfilter,MicroEvent,_,from */

define(['exports', 'data/sp500-annual-return'], function (exports, sp500AnnualReturn) {
    'use strict';

    var sp500Data = sp500AnnualReturn.data,
        stockReturn = {};
    MicroEvent.mixin(stockReturn);

    function calculateInvestmentReturn(initialInvestment, percentChanged) {
        return (100 + percentChanged) / 100 * initialInvestment;
    }

    function filterStockReturn(initialInvestment, startYear) {
        var newData = from(sp500Data)
            .where('$Year >= @', startYear)
            .toArray();

        _.each(newData, function (value, index) {
            var preIndex = index - 1,
                investment = preIndex < 0 ? initialInvestment : calculateInvestmentReturn(newData[preIndex].Investment, newData[preIndex].AnnualReturn);
            value.Investment = investment;
            value['S&P 500 Annual Return'] = value.AnnualReturn / 100;
        });

        stockReturn.data = newData;
        stockReturn.trigger('change');
    }

    stockReturn.filterStockReturn = filterStockReturn;

    exports.stockReturn = stockReturn;
});
