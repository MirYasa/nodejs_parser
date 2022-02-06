"use strict";
exports.__esModule = true;
exports.getLinks = void 0;
var urls_1 = require("../constants/urls");
var writeToJSON_1 = require("./writeToJSON");
var path = require("path");
var getHtml_1 = require("./getHtml");
function getLinks(dir) {
    try {
        var content = [];
        (0, getHtml_1.getHtml)(urls_1.CMC_MAIN, content)
            .then(function (res) {
            (0, writeToJSON_1.writeToJSON)(res, path.join(dir, 'data/'));
        })["catch"](function (e) {
            console.log(e, 'main');
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.getLinks = getLinks;
