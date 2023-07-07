import { React, useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import Logo from "./media/sayyes.jpg";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const formRef = useRef(null);

	const submit = () => {
		sendEmail();
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

	const sendEmail = () => {
		const emailData = {
			to_name: "Alex",
		};

		const formData = Object.fromEntries(new FormData(formRef.current));
		Object.assign(emailData, formData);
		console.log(process.env.REACT_APP_SERVICE_ID);

		let keys = {
			service_id: "service_2oogo1g",
			template_id: "template_0er0e33",
			public_key: "JAQb_etGQpqPy_iDJ",
		};

		let params = {
			to_name: name,
			email: email,
			position: "TEMP POSITION",
			company: "TEMP COMPANY",
		};

		emailjs
			.send(keys.service_id, keys.template_id, params, keys.public_key)
			.then(
				(result) => {
					formRef.current.reset();
				},
				(error) => {
					alert("An error occurred, Please try again", error.text);
				}
			);
	};

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
			<form ref={formRef}>
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
