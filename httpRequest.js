var util = require("util");
var http = require("http");

async function httpRequest(config, callback) {
    return await new Promise(function(resolve, reject) {
        var req = http.request(config, callback);
        req.end();
    });
}

module.exports.httpRequest = httpRequest;