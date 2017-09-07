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
   // _getData();
  }

  updateInputValue(event)  {
    this.setState({ inputValue: event.target.value });
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


    function renderView() {
      _getData(data).then(() => {
        debugger
        getData => data;
      });

      //this.setState({dataImg: _getData(data)});
      //console.log('fdsfsd', _getData(data));
      /*if(inputValue === this.state.dataImg) {
        console.log('ok')
      }*/
    }
    renderView();
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