"use strict";
exports.__esModule = true;
exports.getPagesCount = void 0;
function getPagesCount($) {
    var pages = [];
    $('ul.pagination li.page').each(function (i, el) {
        pages.push($(el).text());
    });
    return Math.max.apply(null, pages);
}
exports.getPagesCount = getPagesCount;
