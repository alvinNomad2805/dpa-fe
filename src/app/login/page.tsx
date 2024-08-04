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
    Login Form 
    <br></br>
    <div className="login-container">
      <label className="button-login">Username : </label>
      <input></input>
      <br></br>
      <label className="button-login">Password : </label>
      <input></input>
      <br></br>
      <button
        onClick={goto_dashboard}
      >Login</button>
    </div>
   </> 
  )
}

export default Home
