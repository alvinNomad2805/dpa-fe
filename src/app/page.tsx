"use client"

import { useRouter } from "next/navigation"
import RootLayout from "./layout"
import { useState } from "react"
import Cookies from 'js-cookie'
import getMenu from "./api/getMenuList"
import Image from 'next/image'

const Home = () => {
  const router = useRouter()
  const [UserName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [visibility,setVisibility] = useState(true)
const goto_dashboard = async () => {
    if (UserName === 'admin' && password === 'abc123'){
		console.log('login as dosen')
		// console.log(await getMenu())
		router.push("/pages/dashboard")
	}
	else if (UserName === '1234' && password === '1234'){
		console.log('login as student')
		console.log(await getMenu())
		router.push("/pages/dashboard")
	}
	else {
		alert('User not registered')
	}
	Cookies.set("username", UserName, { expires: 7 }); // Cookie expires in 7 days
  }
  return (
	<RootLayout>
		<div className="main-container">
			<div className="header-up">
				Sistem Informasi Bimbingan Akademik @ 2024
			</div>
			<Image
				src={'/my-assets/uii-logo.png'}
				alt='uii-logo'
				height={80}
				width={80}
				priority={true}
				>
				</Image>

			<div className="login-container">
				<div 
					className="sign-in"
				>
					<span>Sign In</span>
				</div>
				<p>Sign in if you have an account</p>

				<div className="input-form">
					<input placeholder="Email Address" onChange={(e)=>setUserName(e.target.value)}></input>
				</div>

				<div className="input-form" >
					<input 
						type={visibility?"password":"text"}
						placeholder="Password" 
						onChange={(e)=>setPassword(e.target.value)}
						required
						/>
						<span 
							className="password-toogle"
							onClick={()=>setVisibility(!visibility)}
							>
							{visibility ? "🙈" : "🙉"}
						</span>
				</div>

				<div className="login-button">
					<button
						onClick={goto_dashboard}
					>Sign In</button>
				</div>
				<a href="/#" onClick={()=>router.push("/pages/auth/register")}> or Sign Up</a>
				<br />
				<div className="forgot">
					<a href="#">Forgot Password</a>
				</div>
			</div>
		</div>
	</RootLayout>
  )
}

export default Home
