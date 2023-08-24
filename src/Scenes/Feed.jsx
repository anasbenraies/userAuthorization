import React, { useState } from 'react'

export default function Feed() {
const [post,setpost]=useState("")

const handleclick=()=>{
    if(!localStorage.getItem("auth-token")){
        alert("You must Login to post !")
    }else{
        alert(`Post ${post} Submitted !`)
    }
    
}

    return (
        <div>
            <div style={{ height:"30vh", marginLeft: "40%", marginTop: "10%" }}>
                <h2 style={{ color: "white" }}>Post a Comment</h2>
                <input style={{ width: "25%", height: "20%" }} value={post} onChange={(e)=>setpost(e.target.value)}></input>
                <div style={{marginTop:"2%"}}>
                    <button style={{padding:"1%",width:"10%"}} onClick={handleclick}>Post</button>
                </div>
            </div>

        </div>
    )
}
