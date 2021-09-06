import React, { useState } from "react";

//include images into your bundle

import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
//create your first component
export function Home() {
	// const [arr, setArr] = useState([]);
	// const [newStr, setNewStr] = useState("");
	let arr = [
		{
			name: "Libertadores",
			img: "https://www.conmebol.com/sites/default/files/000_1bh0dn.jpg"
		},
		{
			name: "Sudamericana",
			img:
				"https://images.daznservices.com/di/library/Goal_Colombia/24/8a/river-plate-copa-sudamericana-2014_1j4v8ry4krpos1po2p4v5ffdul.jpg?t=1773037457&quality=100"
		},
		{
			name: "Suruga Bank",
			img:
				"https://i.pinimg.com/originals/16/9b/71/169b71c0c3b5a962e48315d7409b10a8.jpg"
		},
		{
			name: "Recopa",
			img:
				"https://t.resfu.com/media/img_news/river-celebrando-la-recopa-sudamericana-2016--afp.jpg"
		}
	];
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			{/* <input
				onChange={e => {
					setNewStr(e.target.value);
				}}></input>

			<button
				onClick={() => {
					setArr([...arr, newStr]);
				}}>
				skdjg
			</button> */}
			<div className="container ">
				<div className="row">
					{arr.map((el, i) => {
						console.log(el, i);
						return <Cards title={el.name} key={i} img={el.img} />;
					})}
				</div>
			</div>
		</div>
	);
}
