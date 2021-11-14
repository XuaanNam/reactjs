import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
class App extends Component {
    state = {
        couters: [
            {id: 1, value: 4, name: 'John'},
            {id: 2, value: 0, name: 'cải'},
            {id: 3, value: 0, name: 'bro?'},
            {id: 4, value: 0, name: 'jesse'},
        ],
    }

    handleIncrement = (couter) => {
        const couters = [...this.state.couters];
        const index = couters.indexOf(couter);
        couters[index] = {...couter};
        couters[index].value++;
        this.setState({couters});

    }
    handleDelete = (couterId) => {
        const couters = this.state.couters.filter(couter => couter.id !== couterId);
        this.setState({couters});
    }

    handleReset = () => {
        const couters = this.state.couters.map(couter => {
            couter.value = 0;
            return couter;
        })
        this.setState({couters})
    }
    render() {
        return (
            <React.Fragment>
                <Navbar totalCouters={this.state.couters.filter(couter => couter.value > 0).length}/>
                <main className="container">
                    <Counters
                        couters={this.state.couters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    />
                </main>
            </React.Fragment>
        )
    }
}

export default App;