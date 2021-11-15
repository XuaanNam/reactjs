import React, { Component } from 'react';
class Couter extends Component {
    

    style = {
        width: '3em',
        margin: 'auto 0',
    }

    // renderTags() {
    //     return (this.state.tags.length === 0) ? <p>There is no tags!</p> : this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    // }

    // construstor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

 
    render() {
        const {onDelete, onIncrement, onDecrement, couter} = this.props;
        return (
            <div className="d-flex">
                <div  style={this.style}>
                    <span style={{userSelect:'none'}} className={this.getBadgeClasses()}>{this.formatCount()}
                    </span>                   
                </div>               
                <button style={{width: '2em'}} onClick={() => {onDecrement(couter)}} 
                    className="btn btn-secondary mt-2 mb-2 mr-1  ml-2 btn-sm">
                        -
                </button>
                <button style={{width: '2em'}} onClick={() => {onIncrement(couter)}} 
                    className="btn btn-secondary mt-2 mb-2 mr-2 btn-sm">
                        +
                </button>
                <button onClick={ () => {onDelete(couter.id)} }
                    className="btn btn-danger m-2 btn-sm">
                        Delete
                </button>
                   
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge badge-";
        classes += (this.props.couter.value === 0) ? "warning m-2" : "primary m-2 ml-4";
        return classes;
    }

    formatCount() { 
        return this.props.couter.value === 0 ? 'zero' : this.props.couter.value;
    }
}


export default Couter;