import React, { Component } from 'react'
//import Event from '../components/Event'



export class EventContainer extends Component {
    render(){
        return (
            <div>
                <h2>Adventure's events{this.props.match.params.event_id}</h2>
            </div>
        )
    }
}

export default EventContainer