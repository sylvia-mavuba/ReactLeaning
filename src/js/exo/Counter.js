import React from 'react';
import ReactDOM from 'react-dom';

/*

/!*
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
);*!/

//Exo2

var CounterDisplay = React.createClass({
   render() {
       return(
           <div>{this.props.counterProp}</div> // je peux récupérer de mon parent ma propriété à laquelle a été assigné son state "counterProp={this.state.counter}"
                                               // la communication parent > enfant des composants se fait par les props
       )
   }
})

// The parent to child flow
var Counter1 = React.createClass({
    //j'initialise l'état du composant = les différents states se trouvent au sein du composant
    getInitialState: function () {
        return {
            counter: 0,
            toto: 'caca'
        }
    },

    render: function() {
        {debugger}
        return (
            <div>
                <h1>the parent to child flow</h1>
                <h2>{this.props.name}</h2>
                <CounterDisplay counterProp={this.state.toto} />  {/!* ici j'ai décidé de faire passé le state du composant Count à la propriété du composant CounterDisplay *!/}
            </div>
        )
    }
});

*/

//The child to parent data flow
/*class CounterDisplay extends React.Component {
    render() {
        debugger
        return(
            <div>
                <p>{this.props.counterProps}</p>
                <button onClick={this.props.incrementCounterProps}>+</button>
                <button onClick={this.props.decrementCounterProps}>-</button>
            </div>
        )
    }

};*/

//dans le cas où un composant n'a pas besoin de state, on peut faire une fonction simple et lui passer les props en params
function CounterDisplay(props) {
    debugger
    return(
        <div>
            <p>{props.counterProps}</p>
            <button onClick={props.incrementCounterProps}>+</button>
            <button onClick={props.decrementCounterProps}>-</button>
        </div>
    )
}

class Counter2 extends React.Component {
    //lorsque l'on utilise "class" on initialise le "state" -> l'état initiale du composant via le constructor et en même temps on y stock les props (super(props))
    constructor(props) {  // équivalent de getInitialState pour createClass
        super(props);
        this.state = {
            counter: 0
        }
    }


    handleIncrement() {
        debugger                                        // je veux faire évoluer mon composant donc je crée une fonction avec un état x (state) => fonction d'incrémentation
        this.setState({counter: this.state.counter+1}) //je l'appele "counter" comme mon état initiale (afin qu'il puisse l'écrasser)
    }

    handleDecrement() {            // fonction de décrémentation
        this.setState({counter: this.state.counter-1}) //je l'appele également "counter" comme mon état initiale (afin qu'il puisse l'écrasser)
    }

    render() {
        return(
            <div>
                <h2>{this.props.name}</h2>    {/* je récupére la props name de mon composant */}
                {/* je veux créer une vue pour rendre mon compteur, donc je crée un composant enfant */ }

                <CounterDisplay counterProps={this.state.counter}
                                incrementCounterProps={ () => this.handleIncrement() }
                                decrementCounterProps={ () => this.handleDecrement() } />

            </div>
        )
    }

};
ReactDOM.render(
    <Counter2 name={'Compteur app'} />, //le composant arrive avec ses propriétés
    document.getElementById('main-container')
);





/*
class Comment extends React.Component{
    //lorsque l'on utilise "class" on initialise le "state" -> l'état initiale du composant via le constructor et en même temps on y stock les props (super(props))
    constructor(props) { // équivalent de getInitialState pour createClass
        debugger
        super(props); //c'est ici que l'on passe les props du composant
        this.state = {
            counter: 0
        }
    }
    render(){
        debugger
        return (
            <h1>{this.props.name}</h1>
        )
    }

}
ReactDOM.render(
    <Comment name={'hello'} />, //le composant arrive avec ses propriétés
    document.getElementById('main-container')
);*/
