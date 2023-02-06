import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The Button has been Clicked
          <span className="span-element"> {count}</span> times
        </h1>
        <p className="description">Click the button to increase the Count</p>
        <div>
          <button
            className="button-style"
            type="button"
            onClick={this.onIncrement}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
