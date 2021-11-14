import React, { Component } from 'react';
class Couter extends Component {
    

    // style = {
    //     fontSize: 10,
    //     fontWeight: 'bold',
    // }

    // renderTags() {
    //     return (this.state.tags.length === 0) ? <p>There is no tags!</p> : this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    // }

    // construstor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

 
    render() {
       
        return (
            <React.Fragment>
                <div>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={() => {this.props.onIncrement(this.props.couter)}} className="btn btn-secondary btn-sm">
                        Increment
                    </button>
                    <button onClick={ () => {this.props.onDelete(this.props.couter.id)} }
                        className="btn btn-danger m-2 btn-sm">
                            Delete
                    </button>
                    {/* <ul>
                        {this.state.tags.length === 0 && <p>There is no tags!</p>}
                        { this.renderTags()}
                    </ul> */}
                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.couter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() { 
        return this.props.couter.value === 0 ? 'zero' : this.props.couter.value;
    }
}


export default Couter;