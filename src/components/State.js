import React from 'react'

class State extends React.Component {
    // state -> react object
    constructor(props) {
        super(props);
        this.state = {
            username: "Alex",
            batch: "A",
            greet: "Hello!"
        }
    }
    // setState
    greeting = () => {
        this.setState({
            greet: "Welcome!",
            username: "smith",
            batch: "b"
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.greet} {this.state.username} from batch {this.state.batch}</h1>
                <button onClick={this.greeting}>Change greeting</button>
            </> 
        )
    }
}

export default State;