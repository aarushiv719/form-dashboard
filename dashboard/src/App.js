import React from "react";

import Logo from "./media/sayyes.svg";
import "./App.css";
import JobModal from "./JobModal";

function App() {
	const [showModal, setShowModal] = React.useState(false);

	const MenuItem = ({ text }) => {
		return (
			<li
				className="py-3 px-6 rounded-lg ease-in-out duration-200 hover:bg-green-600 hover:cursor-pointer"
				onClick={() => setShowModal(true)}
			>
				{text}
			</li>
		);
	};

	return (
		<div className="flex h-screen bg-gray-200">
			<div className="p-2 w-64 bg-white shadow-md">
				<div className="mb-8 flex justify-center">
					<img src={Logo} alt="Logo" className="w-32 h-32" />
				</div>
				<ul className="mt-2 space-y-5">
					<MenuItem text="Dashboard" />
					<MenuItem text="Jobs" />
					<MenuItem text="Applications" />
				</ul>
			</div>
			<div className="flex-grow p-6">
				<h2 className="text-lg font-semibold">Job Postings</h2>
				<p className="mt-4 text-gray-600">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				{showModal ? (
					<JobModal
						isOpen={showModal}
						setShowModal={() => setShowModal()}
					/>
				) : null}
			</div>
		</div>
	);
}

export default App;
