webpackJsonp([0],{

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(22);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(65);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _todoForm = __webpack_require__(396);

var _todoForm2 = _interopRequireDefault(_todoForm);

var _todoList = __webpack_require__(397);

var _todoList2 = _interopRequireDefault(_todoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.id = 0;

var TodoApp = function (_React$Component) {
    _inherits(TodoApp, _React$Component);

    function TodoApp(props) {
        _classCallCheck(this, TodoApp);

        var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

        _this.state = {
            data: [],
            item: '',
            inputText: ''
        };
        return _this;
    }

    //Fonction d'ajout


    _createClass(TodoApp, [{
        key: 'addTodo',
        value: function addTodo(val) {
            var todo = {
                text: val,
                id: window.id++
            };

            //mis à jour de la data
            this.state.data.push(todo);
            //je met à jour de l'état de ma data
            this.setState({ data: this.state.data });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            debugger;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_todoForm2.default, { addTodo: function addTodo() {
                        return _this2.addTodo();
                    } }),
                _react2.default.createElement(_todoList2.default, { todos: this.state.data })
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(22);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoForm = function (_React$Component) {
    _inherits(TodoForm, _React$Component);

    function TodoForm(props) {
        _classCallCheck(this, TodoForm);

        return _possibleConstructorReturn(this, (TodoForm.__proto__ || Object.getPrototypeOf(TodoForm)).call(this, props));
    }

    _createClass(TodoForm, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            debugger;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', { ref: function (_ref) {
                        function ref(_x) {
                            return _ref.apply(this, arguments);
                        }

                        ref.toString = function () {
                            return _ref.toString();
                        };

                        return ref;
                    }(function (input) {
                        _this2.input = ref;
                    }) }),
                console.log('input: ' + this.input.value),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this2.props.addTodo(input.value);
                            input.value = '';
                        } },
                    '+'
                )
            );
        }
    }]);

    return TodoForm;
}(_react2.default.Component);

exports.default = TodoForm;
;

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(22);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoList = function (_React$Component) {
    _inherits(TodoList, _React$Component);

    function TodoList(props) {
        _classCallCheck(this, TodoList);

        return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props));
    }

    _createClass(TodoList, [{
        key: 'render',
        value: function render() {

            function Todo(_ref) {
                var todo = _ref.todo;

                debugger;
                return _react2.default.createElement(
                    'li',
                    null,
                    todo.text
                );
            }

            var todoList = this.props.todos.map(function (todo, key) {
                return _react2.default.createElement(Todo, { todo: todo, key: todo.id });
            });

            return _react2.default.createElement(
                'ul',
                null,
                todoList
            );
        }
    }]);

    return TodoList;
}(_react2.default.Component);

exports.default = TodoList;

/***/ })

},[395]);
//# sourceMappingURL=app.js.map