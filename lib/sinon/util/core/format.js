/**
 * Format functions
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2014 Christian Johansen
 */
"use strict";

var formatio = require("formatio");

var formatter = formatio.configure({
    quoteStrings: false,
    limitChildrenCount: 250
});

module.exports = function format() {
    return formatter.ascii.apply(formatter, arguments);
};
