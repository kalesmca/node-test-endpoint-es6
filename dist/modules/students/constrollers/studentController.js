"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _studentService = require("../services/studentService");

var _studentService2 = _interopRequireDefault(_studentService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StudentInfo = function StudentInfo() {
  var _this = this;

  _classCallCheck(this, StudentInfo);

  this.getAllStudentList = function (req) {
    console.log("getallStudent list info", req.body);
    return new Promise(function (resolve, reject) {
      _this.sService.getAllData().then(function (response) {
        console.log("Response ::", response);
        resolve({ status: "getAllStudent Success", data: response });
      });
    });
  };

  this.sService = new _studentService2.default();
};

exports.default = StudentInfo;
//# sourceMappingURL=studentController.js.map