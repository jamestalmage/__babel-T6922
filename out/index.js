'use strict';

import _regeneratorRuntime from 'babel-runtime/regenerator';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _callee;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [_callee].map(_regeneratorRuntime.mark);

function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        // inclusion of the following line causes a failure
        (0, _keys2.default)({ foo: 'bar', bar: 'foo' });

        _context.next = 3;
        return 'foo';

      case 3:
      case 'end':
        return _context.stop();
    }
  }, _marked[0], this);
}