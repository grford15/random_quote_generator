import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Quotes from "./components/Quotes";
import { FaRandom } from "react-icons/fa";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quoteText: "",
			quoteAuthor: "",
			quoteGenre: "",
		};
	}

	componentDidMount() {
		axios
			.get("https://quote-garden.herokuapp.com/api/v2/quotes/random")
			.then((response) =>
				this.setState({
					quoteText: response.data.quote.quoteText,
					quoteAuthor: response.data.quote.quoteAuthor,
					quoteGenre: response.data.quote.quoteGenre,
				})
			)
			.catch((error) => console.error(error));
	}

	render() {
		const { quoteText, quoteAuthor, quoteGenre } = this.state;
		return (
			<Router>
				<div className="app-container">
					<Link to="/" id="Home">
						Home
					</Link>
					<div id="logo">
						RandomQuotes{" "}
						<FaRandom onClick={() => window.location.reload(false)} />
					</div>
					<Route
						exact
						path="/"
						render={() => (
							<Home
								quoteText={quoteText}
								quoteAuthor={quoteAuthor}
								quoteGenre={quoteGenre}
							/>
						)}
					/>
					<Route
						path="/quotes"
						render={() => <Quotes quoteAuthor={quoteAuthor} />}
					/>
				</div>
			</Router>
		);
	}
}

export default App;
