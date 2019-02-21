"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config_new = require("../../../config_new");

var _config_new2 = _interopRequireDefault(_config_new);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StudentService = function StudentService() {
    var _this = this;

    _classCallCheck(this, StudentService);

    this.getAllData = function () {
        console.log("getAll service calling");
        var promise = _this.docClient.scan(params).promise();
        return promise;
    };

    this.docClient = new _config_new2.default({}).dynamo();
};

exports.default = StudentService;
//# sourceMappingURL=studentService.js.map