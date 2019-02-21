'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var credentials = require('./constant.json');

var ConfigDB = function ConfigDB() {
    _classCallCheck(this, ConfigDB);

    this.dynamo = function () {
        _awsSdk2.default.config.update({
            accessKeyId: credentials.aws.accessKey,
            secretAccessKey: credentials.aws.secretAccess
        });
        _awsSdk2.default.config.region = credentials.aws.region;
        _awsSdk2.default.config.correctClockSkew = true;

        return new _awsSdk2.default.DynamoDB.DocumentClient();
    };
};

exports.default = ConfigDB;
//# sourceMappingURL=config_new.js.map