import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Button from "./Button";
import "./style.scss";

class App extends Component {
	state = {
		counter: 0
	};

	handleClick = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	render() {
		return (
			<Fragment>
				<h1 className="title">Hello world</h1>
				<h2 style={{ color: "#f00" }}>{this.state.counter}</h2>
				<div>
					<Button
						onClick={() => {
							alert("Button 1");
						}}
					/>
				</div>
				<div>
					<Button onClick={this.handleClick}>Somar</Button>
				</div>
			</Fragment>
		);
	}
}

render(<App />, document.getElementById("app"));
