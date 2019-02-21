import config from "../../../config_new"
export default class StudentService {
    docClient;
    constructor() {
        this.docClient = new config({}).dynamo();
    }
    getAllData = () => {
        console.log("getAll service calling");
        let promise = this.docClient.scan(params).promise();
        return promise;

    }
}