import { React, useEffect, useState } from "react";

import Logo from "./media/sayyes.svg";
import "./App.css";
import JobModal from "./JobModal";

function App() {
	const [showModal, setShowModal] = useState(false);
	const [interactions, setInteractions] = useState("");

	const MenuItem = ({ text, showModal }) => {
		return (
			<li
				className="py-3 px-6 rounded-lg ease-in-out duration-200 hover:bg-green-600 hover:cursor-pointer"
				onClick={() => showModal && showModal(true)}
			>
				{text}
			</li>
		);
	};

	const getInteractions = ({ id }) => {
		fetch("https://say-yes-buffalo-backend.onrender.com/redirect", {
			method: "GET",
			jobId: "1",
		})
			.then((response) => {
				if (response.ok) {
					console.log(response.json());
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
				console.log(data);
				setInteractions(data);
			});
	};

	useEffect(() => {
		getInteractions(1);
	}, []);

	return (
		<div className="flex h-screen bg-gray-200">
			<div className="p-2 w-64 bg-white shadow-md">
				<div className="mb-8 flex justify-center">
					<img src={Logo} alt="Logo" className="w-32 h-32" />
				</div>
				<ul className="mt-2 space-y-5">
					<MenuItem text="Dashboard" />
					<MenuItem text="Jobs" showModal={setShowModal} />
					<MenuItem text="Applications" />
				</ul>
			</div>
			<div className="flex-grow p-6">
				<h2 className="text-lg font-semibold">Job Postings</h2>
				<p className="mt-4 text-gray-600">{interactions}</p>
				{showModal ? (
					<JobModal setShowModal={() => setShowModal()} />
				) : null}
			</div>
		</div>
	);
}

export default App;
