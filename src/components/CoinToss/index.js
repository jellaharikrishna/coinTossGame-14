import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {result: 0, headCount: 0, tailCount: 0, totalCount: 0}

  onClickCoinTossBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevCount => ({
        headCount: prevCount.headCount + 1,
        totalCount: prevCount.totalCount + 1,
      }))
    } else {
      this.setState(prevCount => ({
        tailCount: prevCount.tailCount + 1,
        totalCount: prevCount.totalCount + 1,
      }))
    }
    this.setState({result: tossResult})
  }

  render() {
    const {result, headCount, tailCount, totalCount} = this.state
    return (
      <div className="app-container">
        <div className="coinToss-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="sub-title">Heads (or) Tails</p>
          {result === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="coinTossImg"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="coinTossImg"
            />
          )}
          <button
            type="button"
            className="coinToss-btn"
            onClick={this.onClickCoinTossBtn}
          >
            Toss Coin
          </button>
          <div className="resultCount-card">
            <p className="heading">Total: {totalCount}</p>
            <p className="heading">Heads: {headCount}</p>
            <p className="heading">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
