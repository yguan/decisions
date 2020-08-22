/*jslint nomen: true*/
/*global $,define,require */

// http://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/spearn.htm
// https://www.thestreet.com/investing/annual-sp-500-returns-in-history
// http://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html
// http://www.econ.yale.edu/~shiller/data.htm

define(function (require, exports, module) {
    'use strict';

    var data = [
        {Year: 1970, AnnualReturn: 0.01, Dividend: 3.46, Inflation: 5.84},
        {Year: 1971, AnnualReturn: 10.79, Dividend: 3.10, Inflation: 4.30},
        {Year: 1972, AnnualReturn: 15.63, Dividend: 2.70, Inflation: 3.27},
        {Year: 1973, AnnualReturn: -17.37, Dividend: 3.70, Inflation: 6.16},
        {Year: 1974, AnnualReturn: -28.72, Dividend: 5.43, Inflation: 11.03},
        {Year: 1975, AnnualReturn: 31.55, Dividend: 4.14, Inflation: 9.20},
        {Year: 1976, AnnualReturn: 19.15, Dividend: 3.93, Inflation: 5.75},
        {Year: 1977, AnnualReturn: -11.50, Dividend: 5.11, Inflation: 6.50},
        {Year: 1978, AnnualReturn: 1.06, Dividend: 5.39, Inflation: 7.62},
        {Year: 1979, AnnualReturn: 12.31, Dividend: 5.53, Inflation: 11.22},
        {Year: 1980, AnnualReturn: 25.77, Dividend: 4.74, Inflation: 13.58},
        {Year: 1981, AnnualReturn: -9.73, Dividend: 5.57, Inflation: 10.35},
        {Year: 1982, AnnualReturn: 14.76, Dividend: 4.93, Inflation: 6.16},
        {Year: 1983, AnnualReturn: 17.26, Dividend: 4.32, Inflation: 3.22},
        {Year: 1984, AnnualReturn: 1.40, Dividend: 4.68, Inflation: 4.30},
        {Year: 1985, AnnualReturn: 26.36, Dividend: 3.88, Inflation: 3.55},
        {Year: 1986, AnnualReturn: 14.62, Dividend: 3.38, Inflation: 1.91},
        {Year: 1987, AnnualReturn: 2.03, Dividend: 3.71, Inflation: 3.66},
        {Year: 1988, AnnualReturn: 12.40, Dividend: 3.68, Inflation: 4.08},
        {Year: 1989, AnnualReturn: 27.25, Dividend: 3.32, Inflation: 4.83},
        {Year: 1990, AnnualReturn: -6.56, Dividend: 3.74, Inflation: 5.39},
        {Year: 1991, AnnualReturn: 26.31, Dividend: 3.11, Inflation: 4.25},
        {Year: 1992, AnnualReturn: 4.46, Dividend: 2.90, Inflation: 3.03},
        {Year: 1993, AnnualReturn: 7.06, Dividend: 2.72, Inflation: 2.96},
        {Year: 1994, AnnualReturn: -1.54, Dividend: 2.91, Inflation: 2.61},
        {Year: 1995, AnnualReturn: 34.11, Dividend: 2.30, Inflation: 2.81},
        {Year: 1996, AnnualReturn: 20.26, Dividend: 2.01, Inflation: 2.93},
        {Year: 1997, AnnualReturn: 31.01, Dividend: 1.60, Inflation: 2.34},
        {Year: 1998, AnnualReturn: 26.67, Dividend: 1.32, Inflation: 1.55},
        {Year: 1999, AnnualReturn: 19.53, Dividend: 1.14, Inflation: 2.19},
        {Year: 2000, AnnualReturn: -10.14, Dividend: 1.23, Inflation: 3.38},
        {Year: 2001, AnnualReturn: -13.04, Dividend: 1.37, Inflation: 2.83},
        {Year: 2002, AnnualReturn: -23.37, Dividend: 1.83, Inflation: 1.59},
        {Year: 2003, AnnualReturn: 26.38, Dividend: 1.61, Inflation: 2.27},
        {Year: 2004, AnnualReturn: 8.99, Dividend: 1.60, Inflation: 2.68},
        {Year: 2005, AnnualReturn: 3.00, Dividend: 1.79, Inflation: 3.39},
        {Year: 2006, AnnualReturn: 13.62, Dividend: 1.77, Inflation: 3.24},
        {Year: 2007, AnnualReturn: 3.55, Dividend: 1.89, Inflation: 2.85},
        {Year: 2008, AnnualReturn: -38.47, Dividend: 3.11, Inflation: 3.85},
        {Year: 2009, AnnualReturn: 23.49, Dividend: 2.00, Inflation: -0.34},
        {Year: 2010, AnnualReturn: 12.64, Dividend: 1.84, Inflation: 1.64},
        {Year: 2011, AnnualReturn: 0.00, Dividend: 2.07, Inflation: 3.16},
        {Year: 2012, AnnualReturn: 13.41, Dividend: 2.19, Inflation: 2.07},
        {Year: 2013, AnnualReturn: 29.60, Dividend: 1.89, Inflation: 1.46},
        {Year: 2014, AnnualReturn: 11.39, Dividend: 1.92, Inflation: 1.62},
        {Year: 2015, AnnualReturn: -0.73, Dividend: 2.12, Inflation: 0.12},
        {Year: 2016, AnnualReturn: 9.54, Dividend: 2.04, Inflation: 1.26},
        {Year: 2017, AnnualReturn: 19.42, Dividend: 1.83, Inflation: 2.13},
        {Year: 2018, AnnualReturn: -6.24, Dividend: 2.14, Inflation: 2.44},
        {Year: 2019, AnnualReturn: 28.88, Dividend: 1.82, Inflation: 2.29},
    ];
    exports.data = data;
});
