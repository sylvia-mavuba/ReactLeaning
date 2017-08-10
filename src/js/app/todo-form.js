import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger
        return (

            <div>
                {/*<input ref={ node => {input = node} }/>*/}
                <input ref={ (input) => {this.input = ref} }/>
                {console.log('input: '+this.input.value)}

                <button onClick={() => {
                    this.props.addTodo(input.value);
                    input.value = '';
                }}>
                    +
                </button>
            </div>
        )
    }
};