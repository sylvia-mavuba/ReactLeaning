webpackJsonp([0],{

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(65);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _todoList = __webpack_require__(396);

var _todoList2 = _interopRequireDefault(_todoList);

var _dataService = __webpack_require__(397);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    _this.state = {
      items: [],
      inputValue: '',
      dataImg: []
    };
    _this.updateInputValue = _this.updateInputValue.bind(_this);
    _this.submitForm = _this.submitForm.bind(_this);
    return _this;
  }

  _createClass(TodoApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      {
        debugger;
      }
      (0, _dataService.getData)().then();
    }
  }, {
    key: 'updateInputValue',
    value: function updateInputValue(event) {
      this.setState({ inputValue: event.target.value });
    }
  }, {
    key: 'renderView',
    value: function renderView(dataImg) {
      (0, _dataService.getData)(data);
    }
  }, {
    key: 'submitForm',
    value: function submitForm(event) {
      event.preventDefault();
      debugger;
      this.setState({
        inputValue: '',
        items: [].concat(_toConsumableArray(this.state.items), [this.state.inputValue])
      });

      var inputValue = this.state.inputValue;

      debugger;
      this.renderView();
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: this.submitForm.bind(this) },
          _react2.default.createElement('input', { value: this.state.inputValue, onChange: this.updateInputValue.bind(this) }),
          _react2.default.createElement(
            'button',
            null,
            'Ok'
          )
        ),
        _react2.default.createElement(_todoList2.default, { items: this.state.items })
      );
    }
  }]);

  return TodoApp;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(TodoApp, null), document.getElementById('main-container'));

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(props) {
  return _react2.default.createElement(
    'ul',
    null,
    props.items.map(function (item, index) {
      return _react2.default.createElement(
        'li',
        { key: index },
        item
      );
    })
  );
};

exports.default = List;

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;

var _axios = __webpack_require__(219);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = 'https://pixabay.com/api/?key=6381345-1c26ecce17f4366448272111c&q=yellow+flowers&image_type=photo';

function getData(data, tags) {

  return _axios2.default.get(url).then(function (res) {
    debugger;
    data = res.data.hits;
    Object.keys(data).map(function (key) {
      return tags = data[key].tags;
    });
  }).catch(function (err) {
    console.log(err);
  });
}

/***/ })

},[395]);
//# sourceMappingURL=app.js.map