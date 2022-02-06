"use strict";
exports.__esModule = true;
var getLinks_1 = require("./utils/getLinks");
var getSpecificcrypto_1 = require("./utils/getSpecificcrypto");
var fs = require("fs");
var urls_1 = require("./constants/urls");
function main() {
    var now = Date.now();
    var query = 'currencies';
    if (query === 'links') {
        (0, getLinks_1.getLinks)(__dirname);
    }
    else {
        var address = fs.readFileSync("".concat(__dirname, "/data/cryptoLinks.json"), 'utf-8');
        var first_curr = JSON.parse(address).slice(0, 1);
        (0, getSpecificcrypto_1.getSpecificcrypto)(urls_1.CMC_BASE + first_curr[0].link);
    }
    console.log(new Date(Date.now() - now));
}
main();
