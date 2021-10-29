import React from 'react';
import Overview from "./components/Overview";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      tasks: [],
      count: 1
    }
    this.changingState = this.changingState.bind(this);
  }

  changingState() {
    this.setState(prevState => {
      const prevTodo = prevState.tasks;
      prevTodo.push(`${prevState.count}. ${document.getElementById("inputTask").value}`)
      
      return { tasks: prevTodo,
                count: prevState.count+1 }
    })
  }

  render() {
    return (
      <div className="App">
        <label>Task:</label>
        <input type="text" id="inputTask"></input>
        <button onClick={this.changingState}>Submit</button>
        <Overview task={this.state.tasks} />
      </div>
    );
  }
}


export default App;
