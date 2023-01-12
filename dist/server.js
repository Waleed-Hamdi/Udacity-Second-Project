"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const usersHandlers_1 = __importDefault(require("./handlers/usersHandlers"));
const productsHandlers_1 = __importDefault(require("./handlers/productsHandlers"));
const orderHandlers_1 = __importDefault(require("./handlers/orderHandlers"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
const port = config_1.default.port;
const address = `0.0.0.0:${port}`;
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.status(200).send('Hello World!');
});
(0, usersHandlers_1.default)(app);
(0, productsHandlers_1.default)(app);
(0, orderHandlers_1.default)(app);
app.listen(port, function () {
    console.log(`starting app on: ${address}`);
});
exports.default = app;
