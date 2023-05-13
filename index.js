(async () => {

// Подключаем другие файлы
var Result = require("./result.js").Result;
var httpRequest = require("./httpRequest.js").httpRequest;

// Входные данные программы (сайты)
var input = [
    {
        host: "www.google.com",
        port: 80,
        path: "/"
    },
    {
        host: "vk.com",
        port: 80,
        path: "/"
    },
];

// Выходные данные программы (сайты)
var output = [];


// Скачиваем сайт
async function run(config){
    // Результат выполнения программы
    var result = new Result();

    var content = "";

    // var startTime = performance.now()
    var req = await httpRequest(config, function(res) {

        res.setEncoding("utf8");
        res.on("data", function (chunk) {
            content += chunk;
        });
        res.on("end", function () {
            result.countByte = content.length;
        });
    });
    // req.end();
    
    return result;
}

// Перебор входных данных
for (let elem of input) {
    output.push(await run(elem));
}

// Вывод результата
console.log(output)
console.log(1);

})()