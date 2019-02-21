import studentService from "../services/studentService"
export default class StudentInfo {
  sService;
  constructor() {
    this.sService = new studentService();
  }
  getAllStudentList = req => {
    console.log("getallStudent list info", req.body);
    return new Promise((resolve, reject) => {
      this.sService.getAllData().then((response) => {
        console.log("Response ::", response);
        resolve({ status: "getAllStudent Success", data: response });
      })

    });
  };

  getMyData = req => {
    console.log("getMyData", req.body);
    return new Promise((resolve, reject) => {
      // this.sService.getAllData().then((response) => {
      //   console.log("Response ::", response);
      //   resolve({ status: "getAllStudent Success", data: response });
      // })
      resolve({ status: "getMyData Success", data: { "data": "success Data" } });
    });
  };
}
