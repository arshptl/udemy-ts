import React from "react";
import "../App.css";
import { connect } from 'react-redux';
import {Todo, fetchTodos} from '../store/actions';
import {StoreState} from '../store/reducers';

// interface AppProps {
//   color?: string;
//   todos: Todo[];
//   fetchTodos: () => any;
// }

// // interface AppState{
// //   counter: number;
// // }


// class App extends React.Component<AppProps> {
//   state = { counter: 0 };

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };
//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };
//   render() {
//     return (
//       <div className="App">
//         <div>Hii there!</div>
//         <div>{this.props.color}</div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         <div>{this.state.counter}</div>
//       </div>
//     );
//   }
// }

// const matchStateToProps = ({todos}: StoreState) => { 
//   return {
//     todos
//   }
// }

// export default App;


interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(
  mapStateToProps,
  { fetchTodos }
)(_App);