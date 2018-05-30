'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _listen = require('./util/listen');

var _listen2 = _interopRequireDefault(_listen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.set('view engine', 'pug');
app.set('views', _path2.default.resolve(__dirname, 'templates'));
app.set('query parser', 'simple');

(0, _listen2.default)(app);