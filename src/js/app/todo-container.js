import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './todo-form';
import TodoList from './todo-list';

class TodoApp extends React.Component {
    constructor(props) {
        this.state = {
            data: []
        }
    },

    //Fonction d'ajout
    addTodo() {
        const todo = {
            text: val,
            id: ''
        };

        //mis à jour de la data
        this.state.data.push(data);
        //je met à jour de l'état de ma data
        this.setState({data: this.state.data})
    }


    render() {
        debugger
        return (
            <TodoForm addTodo={() => this.addTodo()}/>
        )
    }
}

ReactDOM.render(
    <TodoApp />,
    document.getElementsById('main-container')
);