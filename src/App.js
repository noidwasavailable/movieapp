import React from "react";
import PropTypes from "prop-types";

const foodILike = [
	{
		id: 1,
		name: "kimchi",
		image:
			"https://www.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1843-e1477360668451.jpg",
		rating: 5
	},
	{
		id: 2,
		name: "bibimbap",
		image:
			"https://www.recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg",
		rating: 4
	},
	{
		id: 3,
		name: "sushi",
		image:
			"https://www.thespruceeats.com/thmb/IyxiJdbwFaixy4iolNYTLjBmW_w=/4288x2848/filters:fill(auto,1)/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg",
		rating: 2
	},
	{
		id: 4,
		name: "donkatsu",
		image:
			"https://www.maangchi.com/wp-content/uploads/2015/02/donkkaseu-plate.jpg",
		rating: 3
	}
];

function Food({ name, image, rating }) {
	return (
		<div>
			<h2>i love {name}</h2>
			<h4>{rating}/5</h4>
			<img src={image} alt={name} />
		</div>
	);
}

Food.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired
};

function App() {
	return (
		<div>
			<h1>Foods!</h1>
			{foodILike.map(item => (
				<Food
					key={item.id}
					name={item.name}
					image={item.image}
					rating={item.rating}
				/>
			))}
		</div>
	);
}

export default App;
