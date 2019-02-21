"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _studentController = require("../students/constrollers/studentController");

var _studentController2 = _interopRequireDefault(_studentController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var studentRoutes = (0, _express.Router)();


var getAllStudents = function getAllStudents(req, res) {
  console.log("getall student routes calling");
  var studentInfo = new _studentController2.default({});
  studentInfo.getAllStudentList(req).then(function (studentRes) {
    // res.sendStatus(200);
    console.log("student res router ::", studentRes);
    res.json(studentRes);
  });
};

studentRoutes.post("/getAll", getAllStudents);

exports.default = studentRoutes;
//# sourceMappingURL=studentRoutes.js.map