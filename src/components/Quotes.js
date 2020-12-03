import React from "react";

class Quotes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: [],
		};
	}

	render() {
		return <h1>Updated Quotes page</h1>;
	}
}

export default Quotes;
