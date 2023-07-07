import { React, useState, useRef, useEffect } from "react"

import emailjs from "@emailjs/browser"
import Logo from "./media/sayyes.jpg"

function App() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [redirectLink, setRedirectLink] = useState("")
	const [isDefault, setIsDefault] = useState(false)
	const [jobTitle, setJobTitle] = useState("")
	const [company, setCompany] = useState("")
	const [jobLink, setJobLink] = useState("")
	const [jobDescription, setJobDescription] = useState("")

	useEffect(() => {
		const queryParameters = new URLSearchParams(window.location.search)
		const jobid = queryParameters.get("jobid")
		if (!jobid) {
			setIsDefault(false)
		} else {
			setIsDefault(true)
			//Get job id from param

			console.log(jobid)
			fetch(
				`https://say-yes-buffalo-backend.onrender.com/job/${jobid}}`,
				{
					method: "GET",
				}
			)
				.then((res) => res.json())
				.then((data) => {
					console.log(data)
					setJobTitle(data.title)
					setJobDescription(data.description)
					setCompany(data.company)
					setJobLink(data.joburl)
				})
		}
	}, [])
	const formRef = useRef(null)
	console.log(jobLink)
	const submit = () => {
		let emailPush = sendEmail()
		let serverPost = postInteraction()
		Promise.all([emailPush, serverPost]).then(() => {
			redirect()
		})
	}

	const sendEmail = () => {
		const emailData = {
			to_name: "Alex",
		}

		const formData = Object.fromEntries(new FormData(formRef.current))
		Object.assign(emailData, formData)

		let keys = {
			service_id: "service_2oogo1g",
			template_id: "template_0er0e33",
			public_key: "JAQb_etGQpqPy_iDJ",
		}

		let params = {
			to_name: name,
			email: email,
			position: "TEMP POSITION",
			company: "TEMP COMPANY",
		}

		console.log("sending email")
		return emailjs
			.send(keys.service_id, keys.template_id, params, keys.public_key)
			.then(
				(result) => {
					console.log("email sent!")
					formRef.current.reset()
					return result
				},
				(error) => {
					alert("An error occurred, Please try again", error.text)
				}
			)
	}

	const postInteraction = () => {
		console.log("posting")

		return fetch(
			"https://say-yes-buffalo-backend.onrender.com/interaction",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: email,
					name: name,
					jobId: "1",
				}),
			}
		)
			.then((response) => {
				console.log(response)
				if (response.ok) {
					console.log("post response ok")
				} else {
					console.log(
						"HTTP error:" +
							response.status +
							":" +
							response.statusText
					)
					return null
				}
			})
			.then(() => {
				console.log("Succeeded!\nName: " + name + "\nEmail: " + email)
			})
	}

	const redirect = () => {
		console.log("redirecting")
		setRedirectLink("https://sayyesbuffalo.org/")
		window.location.replace(redirectLink)
	}

	return (
		<div className="absolute inset-16 rounded-3xl p-8 bg-gray-300 drop-shadow-lg ">
			<img
				src={Logo}
				alt="Say Yes Buffalo"
				className="max-w-1/2 md:max-w-1/4 mx-auto rounded-3xl"
			></img>

			{isDefault && (
				<>
					<p className="text-center text-gray-700 mt-1 text-lg">
						Let's Stay Connected - Please Share Your Details
					</p>
					<form ref={formRef}>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								padding: "1rem",
							}}
						>
							<h2>
								<label htmlFor="name">
									Job Title: {jobTitle}
								</label>
							</h2>

							<h3>
								<label htmlFor="company">
									Job Description: {jobDescription}
								</label>
							</h3>
						</div>
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
							<a href={jobLink}>Continue to Link</a>
						</button>
					</div>
				</>
			)}
			{!isDefault && (
				<>
					<p className="text-center text-gray-700 mt-1 text-lg">
						Thanks for visiting! Check out our site!
					</p>
					<div className="w-full flex my-5">
						<button className="rounded-full bg-blue-600 text-white m-auto p-3 px-10 ease-out duration-200 hover:scale-110 disabled:bg-gray-400 disabled:pointer-events-none">
							<a href="https://sayyesbuffalo.org/">To Website</a>
						</button>
					</div>
				</>
			)}
			<hr />
		</div>
	)
}

export default App
