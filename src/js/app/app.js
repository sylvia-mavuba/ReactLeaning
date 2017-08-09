import React from 'react';
import ReactDOM from 'react-dom';

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
                <CounterDisplay counterProp={this.state.toto} />  {/* ici j'ai décidé de faire passé le state du composant Count à la propriété du composant CounterDisplay */}
            </div>
        )
    }
});


//The child to parent data flow
//tu t'es arrêté à vouloir créer un nouveau composant avec btn d'incrémentation et décrémentation
var CounterDisplay = React.createClass({

});

var Counter2 = React.createClass({
    getInitialState: function () {   //voici l'état initiale de mon composant
        return {
            counter: 0
        }
    },

    handleIncrement() {            // je veux faire évoluer mon composant donc je crée une fonction avec un état x (state) => fonction d'incrémentation
        this.setState({counter: this.state.counter + 1}) //je l'appele "counter" comme mon état initiale (afin qu'il puisse l'écrasser)
    },

    handleDecrement() {            // fonction de décrémentation
        this.setState({counter: this.state.counter - 1}) //je l'appele également "counter" comme mon état initiale (afin qu'il puisse l'écrasser)
    },

    render() {
        return(
            <div>
                <h2>{this.name.counter}</h2>    /* je récupére la props name de mon composant */
                /* je veux créer une vue pour rendre mon compteur, donc je crée un composant enfant */
                <CounterDisplay

                />

            </div>
        )
    }

    });
ReactDOM.render(
    <Counter1 name={'counter-main'} />, //le composant arrive avec ses propriétés
    document.getElementById('main-container')
);


