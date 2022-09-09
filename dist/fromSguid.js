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
 * @throws InvalidSguidError Throws if signed message cannot be opened.
 * @throws UnexpectedNamespaceValueError Throws if the namespace contained in the payload does not match the expected namespace.
 * @throws UnexpectedResourceTypeNameValueError Throws if the resource type name contained in the payload does not match the expected resource type name.
 */
/*:: import type {
  FromSguidType
} from './types';*/
var fromSguid /*: FromSguidType*/ = function fromSguid(base64PublicKey, expectedNamespace, expectedResourceTypeName, sguid) {
  var payload = void 0;

  try {
    payload = _tweetnacl2.default.sign.open((0, _tweetnaclUtil.decodeBase64)((0, _base64Url.unescape)(sguid)), (0, _tweetnaclUtil.decodeBase64)((0, _base64Url.unescape)(base64PublicKey)));

    if (payload !== null) {
      payload = JSON.parse((0, _tweetnaclUtil.encodeUTF8)(payload));
    }
  } catch (error) {
    throw new _errors.InvalidSguidError(sguid);
  }

  if (payload === null) {
    throw new _errors.InvalidSguidError(sguid);
  }

  if (expectedNamespace !== payload.namespace) {
    throw new _errors.UnexpectedNamespaceValueError(sguid, expectedNamespace, expectedResourceTypeName, payload);
  }

  if (expectedResourceTypeName !== payload.type) {
    throw new _errors.UnexpectedResourceTypeNameValueError(sguid, expectedNamespace, expectedResourceTypeName, payload);
  }

  return {
    id: payload.id,
    namespace: payload.namespace,
    type: payload.type
  };
};

exports.default = fromSguid;
//# sourceMappingURL=fromSguid.js.map