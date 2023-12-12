import React from "react";
import "./App.css";

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

// class App extends React.Component {
//     // counter = 0;
//     constructor() {
//         super();
//         this.state = {
//             counter: 0
//         };
//     }

//     handleOnClick = (e) => {
//         this.setState({ counter: this.state.counter + 1 });
//     };
//     render() {
//         return (
//             <div>
//                 <Button onClick={this.handleOnClick}>Click Me</Button>
//                 <span>Counter: {this.state.counter}</span>
//             </div>
//         );
//     }
// }

class App extends React.Component {
    state = {
        showMenu: false
    };

    openMenu = () => {
        this.setState({
            showMenu: true
        });
    };
    closeMenu = () => {
        this.setState({
            showMenu: false
        });
    };
    render() {
        return (
            <main>
                <button onClick={this.openMenu}>Menu</button>
                {this.state.showMenu ? (
                    <div className="menu">
                        <button onClick={this.closeMenu}>X</button>
                    </div>
                ) : null}
            </main>
        );
    }
}

// class App extends React.Component {
//     handleOnClick = () => {
//         console.log("Hello");
//     };
//     render() {
//         return (
//             <div>
//                 <Button>Click Me</Button>
//                 {/* <Button1>Click Me1</Button1> */}
//                 <span>Counter: 0</span>
//             </div>
//         );
//     }
// }
export default App;
