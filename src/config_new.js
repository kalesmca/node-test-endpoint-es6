var credentials = require('./constant.json')
import AWS from 'aws-sdk';
export default class ConfigDB {
    constructor() {

    }
    dynamo = () => {
        AWS.config.update({
            accessKeyId: credentials.aws.accessKey,
            secretAccessKey: credentials.aws.secretAccess,
        });
        AWS.config.region = credentials.aws.region;
        AWS.config.correctClockSkew = true;

        return new AWS.DynamoDB.DocumentClient();
    }
}