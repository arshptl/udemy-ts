"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var singleTodoUrl = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(singleTodoUrl).then(function (response) {
    console.log(response.data);
});
