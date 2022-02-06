"use strict";
exports.__esModule = true;
exports.writeToJSON = void 0;
var fs = require("fs");
function writeToJSON(obj, pathDir) {
    var newJSON = JSON.stringify(obj);
    if (obj.length === 0)
        return;
    fs.writeFile("".concat(pathDir, "cryptoLinks.json"), newJSON, function (e) {
        if (e)
            throw new Error(e.message);
        console.log('File created successful!');
    });
}
exports.writeToJSON = writeToJSON;
