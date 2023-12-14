import React from "react";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }
    increment = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };
    decrement = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1
        }));
    };
    render() {
        return (
            <main>
                <button onClick={this.decrement}>-</button>
                <span>Counter:{this.state.counter}</span>
                <button onClick={this.increment}>+</button>
            </main>
        );
    }
}

// class Button extends React.Component {
//     render() {
//         return (
//             <button onClick={this.props.onClick}>{this.props.children}</button>
//         );
//     }
// }

// class App extends React.Component {
//     state = {
//         showMenu: false
//     };

//     openMenu = () => {
//         this.setState({
//             showMenu: true
//         });
//     };
//     closeMenu = () => {
//         this.setState({
//             showMenu: false
//         });
//     };
//     render() {
//         return (
//             <main>
//                 <button onClick={this.openMenu}>Menu</button>
//                 {this.state.showMenu ? (
//                     <div className="menu">
//                         <button onClick={this.closeMenu}>X</button>
//                     </div>
//                 ) : null}
//             </main>
//         );
//     }
// }

export default App;
