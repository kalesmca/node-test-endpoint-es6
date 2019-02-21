import { Router } from "express";
const studentRoutes = Router();
import Students from "../students/constrollers/studentController";

let getAllStudents = (req, res) => {
  console.log("getall student routes calling");
  let studentInfo = new Students({});
  studentInfo.getAllStudentList(req).then(studentRes => {
    // res.sendStatus(200);
    console.log("student res router ::", studentRes);
    res.json(studentRes);
  });
};
let getMyData = (req, res) => {
  console.log("getall student routes calling");
  let studentInfo = new Students({});
  console.log("getMyData :req::", req.headers);
  studentInfo.getMyData(req).then(studentRes => {
    // res.sendStatus(200);
    console.log("student res router ::", studentRes);
    res.json(studentRes);
  });
};

studentRoutes.post("/getAll", getAllStudents);
studentRoutes.post("/getMyData", getMyData);


export default studentRoutes;
