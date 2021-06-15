import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
//create your first component
export function Home() {
	// const [arr, setArr] = useState([]);
	// const [newStr, setNewStr] = useState("");
	let arr = ["hola", "chau", "juego", "ficha"];
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
			<div class="container">
				<div class="row">
					{arr.map((el, i) => {
						console.log(el, i);
						return <Cards title={el} key={i} />;
					})}
				</div>
			</div>
			;
		</div>
	);
}
