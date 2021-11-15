import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import Couter from './counter';
class Couters extends Component {
   
    render() {
        const {onReset, onCreate, onDelete, onIncrement, onDecrement, couters} = this.props;
        return (
            <Container>
                
                <button onClick={onReset} className="btn btn-sm m-2 btn-success">Reset</button>
                <button onClick={onCreate} className="btn btn-sm m-2 btn-info">Create</button>
                {couters.map(couter =>(
                    <Couter 
                        key={couter.id} 
                        onDelete={onDelete} 
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        couter={couter} 
                    />                      
                ))}

            </Container>     
        );
    }
}

export default Couters;