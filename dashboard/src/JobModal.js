import { React, useState } from "react";
import LinkModal from "./LinkModal";

export default function JobModal({ setShowModal }) {
	const [jobTitle, setJobTItle] = useState("");
	const [company, setCompany] = useState("");
	const [description, setDescription] = useState("");
	const [jobLink, setJobLink] = useState("");
	const [customLink, setCustomLink] = useState("");

	const [buttonContents, setButtonContents] = useState(<p>Add job</p>);
	const [submitted, setSubmitted] = useState(false);

	const [linkReady, setLinkReady] = useState(false);

	const submitJob = () => {
		if (submitted) return;

		setSubmitted(true);
		setButtonContents(
			<div class=" flex justify-center items-center">
				<div class="animate-spin rounded-full h-8 w-8 border-b-4 border-white"></div>
			</div>
		);
		setCustomLink("https://say-yes-buffalo-posting.onrender.com/1");
		setTimeout(() => {
			setLinkReady(true);
		}, 1000);

		// return fetch(
		// 	"https://say-yes-buffalo-backend.onrender.com/interaction",
		// 	{
		// 		method: "POST",
		// 		headers: { "Content-Type": "application/json" },
		// 		body: JSON.stringify({
		// 			email: email,
		// 			name: name,
		// 			jobId: "1",
		// 		}),
		// 	}
		// )
		// 	.then((response) => {
		// 		console.log(response);
		// 		if (response.ok) {
		// 			console.log("post response ok");
		// 		} else {
		// 			console.log(
		// 				"HTTP error:" +
		// 					response.status +
		// 					":" +
		// 					response.statusText
		// 			);
		// 			return null;
		// 		}
		// 	})
		// 	.then(() => {
		// 		console.log("Succeeded!\nName: " + name + "\nEmail: " + email);
		// 	});
	};

	const renderModal = () => {
		if (!linkReady) {
			return (
				<div>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-3xl font-semibold">
										Add New Job Posting
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto space-y-5">
									<input
										className="w-full rounded-xl p-3 border-s-slate-300 border-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
										id="job-title"
										tag="input"
										placeholder="Job Title"
										onChange={(e) =>
											setJobTItle(e.target.value)
										}
									/>
									<input
										className="w-full rounded-xl p-3 border-s-slate-300 border-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
										id="Company"
										tag="input"
										placeholder="Company"
										onChange={(e) =>
											setCompany(e.target.value)
										}
									/>
									<textarea
										className="w-full rounded-xl p-3 border-s-slate-300 border-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
										id="Description"
										tag="input"
										placeholder="Short description here"
										onChange={(e) =>
											setDescription(e.target.value)
										}
									/>
									<input
										className="w-full rounded-xl p-3 border-s-slate-300 border-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
										id="job-link"
										tag="input"
										placeholder="Job Posting Link"
										onChange={(e) =>
											setJobLink(e.target.value)
										}
									/>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:text-gray-400 disabled:pointer-events-none"
										type="button"
										onClick={() => setShowModal(false)}
										disabled={submitted}
									>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow duration-150 hover:scale-105 hover:shadow-lg disabled:bg-gray-400 disabled:pointer-events-none outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all"
										type="button"
										disabled={
											jobTitle === "" ||
											company === "" ||
											jobLink === "" ||
											description === ""
										}
										onClick={() => submitJob()}
									>
										<p>{buttonContents}</p>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</div>
			);
		} else {
			return (
				<div>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-3xl font-semibold">
										Link created for {jobTitle} at {company}
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto space-y-5">
									<p>
										Your link is ready! Copy it and share it
										on social media!
									</p>
									<p className="w-full rounded-xl p-3 border-s-slate-300 border-2 focus:outline-none focus:ring-2 focus:ring-slate-400">
										{customLink}
									</p>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="bg-emerald-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow duration-150 hover:scale-105 hover:shadow-lg disabled:bg-gray-400 disabled:pointer-events-none outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all"
										type="button"
										onClick={() => {
											setShowModal(false);
											setLinkReady(false);
										}}
									>
										<p>Got it!</p>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</div>
			);
		}
	};

	return renderModal();
}
