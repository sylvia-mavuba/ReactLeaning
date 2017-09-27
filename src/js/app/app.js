import React from 'react';
import ReactDOM from 'react-dom';
import List from './todo-list';
import {getData as _getData} from './data-service';



class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputValue: '',
      dataImg: []
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.submitForm = this.submitForm.bind(this)
  }

  componentDidMount() {
    {debugger}
   _getData().then(

   );
  }

  updateInputValue(event)  {
    this.setState({ inputValue: event.target.value });
  };

  renderView(dataImg) {
    _getData(data);
  };

  submitForm(event) {
    event.preventDefault();
    debugger
    this.setState({
      inputValue: '',
      items: [...this.state.items, this.state.inputValue]
    });


    let inputValue = this.state.inputValue;

    debugger
    this.renderView();
  };

  render() {

    return (
      <div>
        <form onSubmit={this.submitForm.bind(this)}>
          <input value={this.state.inputValue} onChange={this.updateInputValue.bind(this)} />
          <button>Ok</button>
        </form>
        <List items={this.state.items} />
      </div>
    )
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('main-container')
);