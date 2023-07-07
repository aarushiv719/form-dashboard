import { React, useState } from "react";

export default function JobModal({ setShowModal }) {
	const [jobTitle, setJobTItle] = useState("");
	const [company, setCompany] = useState("");
	const [link, setLink] = useState("");

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
								onChange={(e) => setJobTItle(e.target.value)}
							/>
							<input
								className="w-full rounded-xl p-3 border-s-slate-300 border-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
								id="Company"
								tag="input"
								placeholder="Company"
								onChange={(e) => setCompany(e.target.value)}
							/>
							<input
								className="w-full rounded-xl p-3 border-s-slate-300 border-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
								id="job-link"
								tag="input"
								placeholder="Job Posting Link"
								onChange={(e) => setLink(e.target.value)}
							/>
						</div>
						{/*footer*/}
						<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
							<button
								className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => setShowModal(false)}
							>
								Close
							</button>
							<button
								className="bg-emerald-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow duration-150 hover:scale-105 hover:shadow-lg disabled:bg-gray-400 disabled:pointer-events-none outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all"
								type="button"
								disabled={
									jobTitle === "" ||
									company === "" ||
									link === ""
								}
								onClick={() => setShowModal(false)}
							>
								Save Changes
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</div>
	);
}
