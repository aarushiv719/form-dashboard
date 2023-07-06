import { React, useState } from "react";

import Logo from "./media/sayyes.jpg";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const submit = () => {
		fetch("https://say-yes-buffalo-backend.onrender.com/interaction", {
			method: "POST",
			email: email,
			name: name,
			jobId: "1",
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					console.log(
						"HTTP error:" +
							response.status +
							":" +
							response.statusText
					);
					return null;
				}
			})
			.then((data) => {
				alert("Succeeded!\nName: " + name + "\nEmail: " + email);
			});
	};

	const getEmail = ({ id }) => {};

	return (
		<div className="absolute inset-16 rounded-3xl p-8 bg-gray-300 drop-shadow-lg ">
			<img
				src={Logo}
				alt="Say Yes Buffalo"
				className="max-w-1/2 md:max-w-1/4 mx-auto rounded-3xl"
			></img>
			<p className="text-center text-gray-700 mt-1 text-lg">
				Let's Stay Connected - Please Share Your Details
			</p>
			<hr />
			<form>
				{/* Name */}
				<div className="field w-full m-auto">
					<input
						className="w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
						id="first-name"
						tag="input"
						placeholder="Name"
						autoComplete="given-name"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				{/* Email */}
				<div className="field w-full m-auto mt-5">
					<input
						className="w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
						id="email"
						tag="input"
						placeholder="Email"
						autoComplete="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
			</form>
			<div className="w-full flex my-5">
				<button
					className="rounded-full bg-blue-600 text-white m-auto p-3 px-10 ease-out duration-200 hover:scale-110 disabled:bg-gray-400 disabled:pointer-events-none"
					disabled={email === "" || name === ""}
					onClick={submit}
				>
					Continue to Link
				</button>
			</div>
		</div>
	);
}

export default App;
