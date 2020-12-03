import React from "react";
import axios from "axios";
import "./Quotes.css";

class Quotes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: [],
		};
	}

	componentDidMount() {
		const author = this.props.quoteAuthor;
		axios(`https://quote-garden.herokuapp.com/api/v2/authors/${author}?`)
			.then((res) =>
				this.setState({
					quotes: res.data.quotes,
				})
			)
			.catch((err) => console.error(err));
	}

	render() {
		const { quotes } = this.state;
		return (
			<div className="quote-list">
				<h2>{this.props.quoteAuthor}</h2>
				{quotes.length > 0 &&
					quotes.map((quote) => (
						<div className="quote">
							<div id="quote-line"></div>
							<h2>{quote.quoteText}</h2>
						</div>
					))}
			</div>
		);
	}
}

export default Quotes;
