class Result {
    constructor() {
        this.titleTime = null; // Время появления заголовка в браузере
        this.renderTime = null; // Время появления контента в браузере
        this.interactivTime = null; // Время до интерактивности
        this.firstByte = null; // Время первого байта
        this.lastByte = null; // Время последнего байта
        this.countByte = null; // Общее количество байта
        this.DNSTime = null; // Время поиска DNS
        this.connectionTime = null; // Время соединения
    }

}

module.exports.Result = Result;