'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tweetnacl = require('tweetnacl');

var _tweetnacl2 = _interopRequireDefault(_tweetnacl);

var _tweetnaclUtil = require('tweetnacl-util');

var _base64Url = require('base64-url');

var _errors = require('./errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow

/**
 * @param base64SecretKey {@see https://github.com/gajus/sguid#generating-key-pair}
 * @param namespace A namespace of the GUID (e.g. company name or the application name).
 * @param type A resource type name (e.g. article).
 * @param id Resource identifier.
 */
/*:: import type {
  ToSguidType
} from './types';*/
var toSguid /*: ToSguidType*/ = function toSguid(base64SecretKey, namespace, type, id) {
  if (!namespace) {
    throw new _errors.SguidError('Namespace values cannot be falsy.');
  }

  if (!type) {
    throw new _errors.SguidError('Resource type name values cannot be falsy.');
  }

  if (!id) {
    throw new _errors.SguidError('Resource identifier values cannot be falsy.');
  }

  var payload = JSON.stringify({
    id,
    namespace,
    type
  });

  var secretKey = (0, _tweetnaclUtil.decodeBase64)(base64SecretKey);
  var message = (0, _tweetnaclUtil.decodeUTF8)(payload);

  return (0, _base64Url.escape)((0, _tweetnaclUtil.encodeBase64)(_tweetnacl2.default.sign(message, secretKey)));
};

exports.default = toSguid;
//# sourceMappingURL=toSguid.js.map