import React from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            inputValue: "",
            inputError: false
        };
    }

    addTodo = (e) => {
        e.preventDefault();
        if (this.setState.inputValue.length <= 1) {
            this.setState({
                inputError: false
            });
            return;
        }
        const newTodo = {
            id: uuid(),
            text: this.state.inputValue,
            isDone: false
        };

        this.setState((prevState) => {
            const copyTodos = [...prevState.todos, newTodo];
            return {
                todos: copyTodos,
                inputValue: ""
            };
        });
    };
    updateTodo = (isDone, todoId) => {
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map((todo) => {
                if (todo.id === todoId) {
                    const copy = { ...todo, isDone: isDone };
                    return copy;
                }
                return todo;
            });
            return {
                todos: updatedTodos
            };
        });
    };

    deleteTodo = (todoId) => {
        this.setState((prevState) => {
            const keptTodos = prevState.todos.filter(
                (todo) => todo.id !== todoId
            );
            return {
                todos: keptTodos
            };
        });
    };

    handleOnChange = (e) => {
        const { value } = e.target;
        this.setState({
            inputValue: value
        });
        if (value.length <= 1) {
            this.setState({
                inputError: true
            });
        } else {
            this.setState({
                inputError: false
            });
        }
    };

    render() {
        return (
            <main>
                <form onSubmit={this.addTodo}>
                    <div className="form-control">
                        <input
                            onChange={this.handleOnChange}
                            value={this.state.inputValue}
                            type="text"
                            placeholder="What is on your mind"
                        />
                        {this.state.inputError && <span>Invalid Todo</span>}
                    </div>

                    <input type="submit" value="Add Todo" />
                </form>
                <ul>
                    {this.state.todos.length >= 1 &&
                        this.state.todos.map((todo) => {
                            return (
                                <li
                                    key={todo.id}
                                    className={`todo ${
                                        todo.isDone ? "todo--done" : ""
                                    }`}
                                >
                                    <span>{todo.text}</span>

                                    <input
                                        type="checkbox"
                                        defaultChecked={todo.isDone}
                                        onChange={(e) => {
                                            this.updateTodo(
                                                e.target.checked,
                                                todo.id
                                            );
                                        }}
                                    />
                                    <button
                                        className="icon "
                                        onClick={() => this.deleteTodo(todo.id)}
                                        title="delete"
                                    >
                                        Delete
                                    </button>
                                </li>
                            );
                        })}
                </ul>
            </main>
        );
    }
}

export default App;
