'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnexpectedResourceTypeNameValueError = exports.UnexpectedNamespaceValueError = exports.InvalidSguidError = exports.SguidError = undefined;

var _es6Error = require('es6-error');

var _es6Error2 = _interopRequireDefault(_es6Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*:: import type {
  SguidPayloadType
} from './types';*/ // @flow

class SguidError extends _es6Error2.default {}

exports.SguidError = SguidError;
class InvalidSguidError extends SguidError {
  // eslint-disable-next-line no-unused-vars
  constructor(sguid /*: string*/) {
    super('The input SGUID cannot be decrypted.');
  }
}

exports.InvalidSguidError = InvalidSguidError;
class UnexpectedNamespaceValueError extends InvalidSguidError {
  // eslint-disable-next-line no-unused-vars
  constructor(sguid /*: string*/, expectedNamespace /*: string*/, expectedResourceTypeName /*: string*/, payload /*: SguidPayloadType*/) {
    super(sguid);

    this.message = 'Decrypted SGUID namespace does not match the expected namespace.';
  }
}

exports.UnexpectedNamespaceValueError = UnexpectedNamespaceValueError;
class UnexpectedResourceTypeNameValueError extends InvalidSguidError {
  // eslint-disable-next-line no-unused-vars
  constructor(sguid /*: string*/, expectedNamespace /*: string*/, expectedResourceTypeName /*: string*/, payload /*: SguidPayloadType*/) {
    super(sguid);

    this.message = 'Decrypted SGUID resource type name does not match the expected resource type name.';
  }
}
exports.UnexpectedResourceTypeNameValueError = UnexpectedResourceTypeNameValueError;
//# sourceMappingURL=errors.js.map