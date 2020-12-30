import React, { Component } from 'react';

class CardDetails extends Component {
    render() {
        const { id } = this.props.match.params;
        console.log(id)
        return (
            <div>
                
            </div>
        );
    }
}

export default CardDetails;