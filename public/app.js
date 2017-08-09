webpackJsonp([0],{

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(36);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
//Exo 1

class Init extends React.Component {
    render() {

        return (
            <h1>Coucou {this.props.name}</h1>
        )
    }
}

React.render(
    <Init name="sylvia"/>,
    document.getElementById('main-container')
);*/

//Exo2

var CounterDisplay = _react2.default.createClass({
    displayName: 'CounterDisplay',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            this.props.counterProp
        ) // je peux récupérer de mon parent ma propriété à laquelle a été assigné son state "counterProp={this.state.counter}"
        // la communication parent > enfant des composants se fait par les props
        ;
    }
});

// The parent to child flow
var Counter1 = _react2.default.createClass({
    displayName: 'Counter1',

    //j'initialise l'état du composant = les différents states se trouvent au sein du composant
    getInitialState: function getInitialState() {
        return {
            counter: 0,
            toto: 'caca'
        };
    },

    render: function render() {
        {
            debugger;
        }
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h1',
                null,
                'the parent to child flow'
            ),
            _react2.default.createElement(
                'h2',
                null,
                this.props.name
            ),
            _react2.default.createElement(CounterDisplay, { counterProp: this.state.toto }),
            '  '
        );
    }
});

//The child to parent data flow
var CounterDisplay = _react2.default.createClass({
    displayName: 'CounterDisplay'
});

var Counter2 = _react2.default.createClass({
    displayName: 'Counter2',

    getInitialState: function getInitialState() {
        //voici l'état initiale de mon composant
        return {
            counter: 0
        };
    },

    handleIncrement: function handleIncrement() {
        // je veux faire évoluer mon composant donc je crée une fonction avec un état x (state) => fonction d'incrémentation
        this.setState({ counter: this.state.counter + 1 }); //je l'appele "counter" comme mon état initiale (afin qu'il puisse l'écrasser)
    },
    handleDecrement: function handleDecrement() {
        // fonction de décrémentation
        this.setState({ counter: this.state.counter - 1 }); //je l'appele également "counter" comme mon état initiale (afin qu'il puisse l'écrasser)
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h2',
                null,
                this.name.counter
            ),
            '    /* je r\xE9cup\xE9re la props name de mon composant */ /* je veux cr\xE9er une vue pour rendre mon compteur, donc je cr\xE9e un composant enfant */',
            _react2.default.createElement(CounterDisplay, null)
        );
    }
});
_reactDom2.default.render(_react2.default.createElement(Counter1, { name: 'counter-main' }), //le composant arrive avec ses propriétés
document.getElementById('main-container'));

/***/ })

},[246]);
//# sourceMappingURL=app.js.map