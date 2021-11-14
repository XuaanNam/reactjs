import React, { Component } from 'react';
import Couter from './counter';
class Couters extends Component {
   
    render() {
        const {onReset, onDelete, onIncrement, couters} = this.props;
        return (
            <div>
                
                <button onClick={onReset} className="btn btn-sm m-2 btn-primary">Reset</button>
                {couters.map(couter =>(
                    <Couter 
                        key={couter.id} 
                        onDelete={onDelete} 
                        onIncrement={onIncrement}
                        couter={couter} 
                    />                      
                ))}

            </div>
        );
    }
}

export default Couters;