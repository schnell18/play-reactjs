import React from 'react'
import ReactDOM from 'react-dom'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {liked: false}
    }

    render() {
        if (this.state.liked) {
            return (
                <div>
                    <p>You like this!</p>
                </div>
            )
        }
        return (
            <div>
                <button onClick={() => this.setState({liked: true})}>Like</button>
            </div>
        )
    }
}

ReactDOM.render(<Button/>, document.querySelector("#root"))