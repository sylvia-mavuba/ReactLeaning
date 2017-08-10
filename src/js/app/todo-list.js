import React from 'react';



export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        function Todo ({todo}){
            debugger
            return (
                <li>{todo.text}</li>
            )
        }

        let todoList = this.props.todos.map((todo, key) => {
            return(
                <Todo todo={todo} key={todo.id} />
            )
        });

        return (
            <ul>{todoList}</ul>
        )
    }
}