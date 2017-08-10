import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './todo-form';
import TodoList from './todo-list';

window.id = 0;

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            item: '',
            inputText: ''
        }
    }

    //Fonction d'ajout
    addTodo(val) {
        const todo = {
            text: val,
            id: window.id++
        };

        //mis à jour de la data
        this.state.data.push(todo);
        //je met à jour de l'état de ma data
        this.setState({data: this.state.data})
    }


    render() {
        debugger
        return (
            <div>
                <TodoForm addTodo={() => this.addTodo()}/>
                <TodoList todos={this.state.data}  />
            </div>
        )
    }
}

ReactDOM.render(
    <TodoApp />,
    document.getElementById('main-container')
);