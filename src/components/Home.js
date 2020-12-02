import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
	return (
		<div>
			{props.quoteText.length > 0 ? (
				<div>
					<div className="quote">
						<div id="quote-line"></div>
						<h2>{props.quoteText}</h2>
					</div>
					<Link to="/quotes" id="quote-author">
						<h4>{props.quoteAuthor}</h4>
						<h6>{props.quoteGenre}</h6>
					</Link>
				</div>
			) : null}
		</div>
	);
};

export default Home;
