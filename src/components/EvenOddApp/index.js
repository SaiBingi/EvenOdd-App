import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const num = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + num}))
  }

  render() {
    const {count} = this.state
    let evenOddText

    if (count % 2 === 0) {
      evenOddText = 'Count is Even'
    } else {
      evenOddText = 'Count is Odd'
    }

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="type-of-count">{evenOddText}</p>
          <div>
            <button type="button" className="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
