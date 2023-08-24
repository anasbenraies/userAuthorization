import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function SignUp({setProfile}) {
    const outerDiv = { width: "35vw", height: "20em", marginLeft: "30%", marginTop: "5%", borderRadius: "10px", backgroundColor: 'white', paddingTop: "2%" }
    const title = { color: 'black', textAlign: 'center' }
    const field = { display: "flex", justifyContent: "space-around", paddingRight: "20%", marginBottom: "5%", color: "black" }
    const [user, setUser] = useState({ name: "", email: "", password: "", DateOfBirth: "" })

    const navigate=useNavigate()



    const handleClick = async (e) => {
        const url = 'http://localhost:8000/users/register';
       const res=await fetch(url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    ) 
    const data =await res.json()
    console.log (data)
    if (data.token){
        console.log(data.user)
        setProfile(data.user)
        localStorage.setItem("auth-token",data.token)
        //console.log(localStorage.getItem('auth-token'))
        //localStorage.removeItem('auth-token');
        navigate("/profile")
    }
    }

    return (
        <div style={outerDiv}>

            <h1 style={title}>Sign Up</h1>
            <div style={{ marginLeft: "25%", marginTop: "10%" }}>
                <div style={field}>
                    <label>Username</label>
                    <input type="text" onChange={(e) => setUser({ ...user, name: e.target.value })}></input>
                </div>

                <div style={field}>
                    <label>Email</label>
                    <input type="text" onChange={(e) => setUser({ ...user, email: e.target.value })}></input>
                </div>

                <div style={field}>
                    <label>Password</label>
                    <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
                </div>


                <div style={field}>
                    <label>Date of birth</label>
                    <input type="Date" onChange={(e) => setUser({ ...user, DateOfBirth: e.target.value })}></input>
                </div>

                <button style={{ marginLeft: '30%' }} onClick={handleClick}>Signup</button>

            </div>

        </div>
    )
}
