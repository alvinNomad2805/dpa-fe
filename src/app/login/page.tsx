"use client"

import { useRouter } from "next/navigation"

const Home = () => {
  const router = useRouter()
const goto_dashboard = () => {
    console.log("Go to dashbboard page")
    router.push("/dashboard")
  }
  return (
	<>
		<div className="main-container">
			<div className="header-up">
				Sistem Informasi Bimbingan Akademik @ 2024
			</div>
			<img src="/my-assets/uii-logo.png" alt="" />

			<div className="login-container">
				<div className="sign-in">
					<span>Sign In</span>
				</div>
				<p>Sign in if you have an account</p>

				<div className="input-form">
					<input placeholder="Email Address"></input>
				</div>

				<div className="input-form">
					<input placeholder="Password"></input>
				</div>

				<div className="login-button">
					<button
						onClick={goto_dashboard}
					>Sign In</button>
				</div>
				<a href="#"> or Sign Up</a>
				<br />
				<div className="forgot">
					<a href="#">Forgot Password</a>
				</div>
			</div>

		</div>
	</> 
  )
}

export default Home
