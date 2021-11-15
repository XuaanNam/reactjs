import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
class App extends Component {
    state = {
        couters: [],
    }

    handleIncrement = (couter) => {
        const couters = [...this.state.couters];
        const index = couters.indexOf(couter);
        couters[index] = {...couter};
        couters[index].value++;
        this.setState({couters});

    }
    handleDecrement = (couter) => {
        const couters = [...this.state.couters];
        const index = couters.indexOf(couter);
        couters[index] = {...couter};
        if(couters[index].value === 0) return;
        couters[index].value--;
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
    handleCreate = () => {
        let id = 1;
        const couters = [...this.state.couters];
        const index = couters.length;
        if(index !== 0){
            id = couters[index - 1].id + 1;
        }
        couters.push({id: id, value: 0});
        this.setState({couters});
        console.log(this.state.couters)
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
                        onDecrement={this.handleDecrement}
                        onCreate={this.handleCreate}
                    />
                </main>
            </React.Fragment>
        )
    }
}

export default App;