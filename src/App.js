import React from "react";

function Food({ favourite }) {
	return <h1>i love {favourite}</h1>;
}

function App() {
	return (
		<div>
			<h1>Hello!</h1>
			<Food favourite="kimchi" />
			<Food favourite="ramyun" />
			<Food favourite="yeet" />
		</div>
	);
}

export default App;
