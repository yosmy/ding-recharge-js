"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowTransfer = exports.ListTransfers = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

var _date = require("@yosmy/date");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ListTransfers = function ListTransfers(_ref) {
  var ui = _ref.ui,
      api = _ref.api,
      criteria = _ref.criteria;
  return /*#__PURE__*/_react["default"].createElement(_ui.LoaderList, {
    ui: {
      layout: ui.layout,
      empty: function empty() {
        return /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "No hay recargas a\xFAn");
      },
      loading: _ui.LoaderListLoading,
      more: _ui.LoaderListMore,
      item: ui.item
    },
    criteria: {
      query: criteria.query,
      limit: criteria.limit
    },
    onCollect: /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query, skip, limit) {
        var transfers;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return api.collectTransfers(null, query.user, null, query.from, query.to, skip, limit);

              case 2:
                transfers = _context.sent;
                return _context.abrupt("return", {
                  items: transfers
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }()
  });
};

exports.ListTransfers = ListTransfers;
ListTransfers.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired,
    item: _propTypes["default"].func.isRequired
  }).isRequired,
  api: _propTypes["default"].shape({
    collectTransfers: _propTypes["default"].func.isRequired
  }).isRequired,
  criteria: _propTypes["default"].shape({
    query: _propTypes["default"].shape({
      user: _propTypes["default"].string,
      from: _propTypes["default"].number,
      to: _propTypes["default"].number
    }).isRequired,
    limit: _propTypes["default"].number
  }).isRequired
};

var ShowTransfer = function ShowTransfer(_ref3) {
  var api = _ref3.api,
      data = _ref3.data,
      props = _objectWithoutProperties(_ref3, ["api", "data"]);

  return /*#__PURE__*/_react["default"].createElement(_ui.Container, _extends({
    flow: "row",
    margin: {
      top: 1
    }
  }, props), /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    width: 150
  }, data.id), /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    width: 150,
    margin: {
      left: 2
    }
  }, data.user), /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    width: 150,
    margin: {
      left: 2
    }
  }, data.rid), /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    width: 150,
    margin: {
      left: 2
    }
  }, data.account), /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    width: 30,
    margin: {
      left: 2
    }
  }, data.receive), /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    width: 50,
    margin: {
      left: 2
    }
  }, data.currency), /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    width: 50,
    margin: {
      left: 2
    }
  }, data.profit), /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    width: 50,
    margin: {
      left: 2
    }
  }, "$", data.amount), /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    width: 300,
    margin: {
      left: 2
    }
  }, (0, _date.format)(data.date * 1000, "D [de] MMMM, YYYY, h:mm:ss A")));
};

exports.ShowTransfer = ShowTransfer;
ShowTransfer.propTypes = {
  data: _propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    user: _propTypes["default"].string.isRequired,
    rid: _propTypes["default"].string.isRequired,
    account: _propTypes["default"].string.isRequired,
    product: _propTypes["default"].string.isRequired,
    amount: _propTypes["default"].number.isRequired,
    receive: _propTypes["default"].number.isRequired,
    currency: _propTypes["default"].string.isRequired,
    profit: _propTypes["default"].number.isRequired,
    date: _propTypes["default"].number.isRequired
  }).isRequired
};