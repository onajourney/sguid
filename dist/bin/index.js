#!/usr/bin/env node
'use strict';

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _tweetnacl = require('tweetnacl');

var _tweetnacl2 = _interopRequireDefault(_tweetnacl);

var _tweetnaclUtil = require('tweetnacl-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-expressions
_yargs2.default.command({
  command: 'new-key-pair',
  desc: 'Generates new random key pair for signing. Returns base64 encoded secret key and public key.',
  handler: function handler() {
    var keyPair = _tweetnacl2.default.sign.keyPair();

    // eslint-disable-next-line no-console
    console.log('secret key:', (0, _tweetnaclUtil.encodeBase64)(keyPair.secretKey));

    // eslint-disable-next-line no-console
    console.log('public key:', (0, _tweetnaclUtil.encodeBase64)(keyPair.publicKey));
  }
}).demandCommand(1).argv;
//# sourceMappingURL=index.js.map