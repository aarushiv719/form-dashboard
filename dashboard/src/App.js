import { React, useRef, useState } from "react";

import Logo from "./media/sayyes.svg";
import "./App.css";
import JobModal from "./JobModal";
import TableauEmbded from "./TableauEmbed";

function App() {
	const [showModal, setShowModal] = useState(false);

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

	return (
		<div className="flex h-screen bg-gray-200 overflow-hidden">
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
				<h2 className="text-lg font-semibold">Dashboard</h2>
				<TableauEmbded />
				{showModal ? (
					<JobModal setShowModal={() => setShowModal()} />
				) : null}
			</div>
		</div>
	);
}

export default App;
