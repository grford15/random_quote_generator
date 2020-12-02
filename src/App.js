import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quoteText: "",
      quoteAuthor: "",
      quoteGenre: ""
    }
  }

  componentDidMount() {
    axios.get('https://quote-garden.herokuapp.com/api/v2/quotes/random')
    .then(response => this.setState({
      quoteText: response.data.quote.quoteText,
      quoteAuthor: response.data.quote.quoteAuthor,
      quoteGenre: response.data.quote.quoteGenre
    }))
    .catch(error => console.error(error))
  }

  render() {
    const {quoteText, quoteAuthor, quoteGenre} = this.state;
    return(
      <div className="app-container">
        
          {quoteText.length > 0 && 
          <div>
            <div className="quote">
            <div id="quote-line"></div>
            <h2>{quoteText}</h2>
            </div>
          <div id="quote-author">
            <h4>{quoteAuthor}</h4>
            <h6>{quoteGenre}</h6>
          </div>
          </div>
          }
        </div>
      
    )
  }
}

export default App;
