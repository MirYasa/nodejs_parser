"use strict";
exports.__esModule = true;
exports.convertToObj = void 0;
function convertToObj($) {
    var res = [];
    $('tbody tr td:nth-child(3) a').each(function (i, elem) {
        var title = $(elem).text();
        var link = $(elem).attr('href');
        res.push({ id: i, title: title, link: link });
    });
    return res;
}
exports.convertToObj = convertToObj;
