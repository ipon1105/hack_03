var result = {
    'titleTime':        undefined,   // Время появления заголовка в браузере
    'renderTime':       undefined,   // Время появления контента в браузере
    'interactivTime':   undefined,   // Время до интерактивности
    'firstByte':        undefined,   // Время первого байта
    'lastByte':         undefined,   // Время последнего байта
    'countByte':        undefined,   // Общее количество байта
    'DNSTime':          undefined,   // Время поиска DNS
    'connectionTime':   undefined,   // Врмя соединения
};

// var util = require("util"),
//     http = require("http");
// var options = {
//     host: "www.google.com",
//     port: 80,
//     path: "/"
// };
// var content = "";
// var req = http.request(options, function(res) {
//     res.setEncoding("utf8");
//     res.on("data", function (chunk) {
//         content += chunk;
//     });
//     res.on("end", function () {
//         console.log(content);
//     });
// });
// req.end();