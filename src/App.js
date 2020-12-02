import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quoteText: "",
      quoteAuthor: ""
    }
  }

  componentDidMount() {
    axios.get('https://quote-garden.herokuapp.com/api/v2/quotes/random')
    .then(response => this.setState({
      quoteText: response.data.quote.quoteText,
      quoteAuthor: response.data.quote.quoteAuthor
    }))
    .catch(error => console.error(error))
  }

  render() {
    const {quoteText, quoteAuthor} = this.state;
    return(
      <div className="app-container">
        <div className="quote">
          <div id="quote-line"></div>
          {quoteText.length > 0 && 
          <div>
            <h2>{quoteText}</h2>
          <button id="quote-author">
            {quoteAuthor}
          </button>
          </div>
          }
        </div>
      </div>
    )
  }
}

export default App;
