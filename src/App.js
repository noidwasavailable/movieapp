import React from "react";

function Food({ name, image }) {
	return (
		<div>
			<h2>i love {name}</h2>
			<img src={image} alt="no pic" />
		</div>
	);
}

const foodILike = [
	{
		name: "kimchi",
		image:
			"data:image/jpeg;base64,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"
	},
	{
		name: "bibimbap",
		image:
			"https://www.recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg"
	},
	{
		name: "sushi",
		image:
			"https://www.thespruceeats.com/thmb/IyxiJdbwFaixy4iolNYTLjBmW_w=/4288x2848/filters:fill(auto,1)/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg"
	},
	{
		name: "donkatsu",
		image:
			"https://www.maangchi.com/wp-content/uploads/2015/02/donkkaseu-plate.jpg"
	}
];

function App() {
	return (
		<div>
			<h1>Hello!</h1>
			{foodILike.map(item => (
				<Food name={item.name} image={item.image} />
			))}
		</div>
	);
}

export default App;
