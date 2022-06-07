import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../store/actions";
import { StoreState } from "../store/reducers";

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

interface AppState {
  fetching: boolean;
}

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? "LOADING" : null}
        {this.renderList()}
      </div>
    );
  }
}

// get the state from the store
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
