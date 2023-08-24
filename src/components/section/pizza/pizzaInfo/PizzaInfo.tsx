import React from "react";
import "./PizzaInfo.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PizzaInfo: React.FC = (): JSX.Element => {
	const { id } = useParams();

	const [pizza, setPizza] = useState<{
		imgSrc?: string;
		imgAlt?: string;
		title?: string;
	}>({});

	useEffect(() => {
		!(async function fetchPizza(): Promise<void> {
			try {
				const { data }: { data: object } = await axios.get(
					"https://64d772272a017531bc134033.mockapi.io/pizzas/" + id,
				);
				setPizza(data);
			} catch (error) {
				alert("NETWORK ERROR");
			}
		})();
	}, [id]);

	return (
		<div className="pizzaInfo">
			<img src={pizza.imgSrc} alt={pizza.imgAlt} />

			<div className="info">
				<h3>{pizza.title}</h3>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ut molestias hic
					doloremque fuga, accusantium tenetur, amet deleniti praesentium blanditiis deserunt. Sit,
					et voluptatibus ea molestias velit, soluta ratione at corrupti culpa, unde autem laborum
					ad id ut nihil adipisci. Voluptatem ipsa expedita minima facere optio nostrum error
					dolores deleniti nisi, ullam tenetur nemo! Deleniti modi maiores facilis aut incidunt quas
					unde perspiciatis eaque voluptatem.
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, id itaque! Necessitatibus
					doloribus laudantium pariatur, nostrum ducimus nulla, obcaecati, numquam asperiores! Nihil
					adipisci corporis reiciendis ratione animi?
				</p>
			</div>
		</div>
	);
};

export default PizzaInfo;
