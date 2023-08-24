import React from 'react'

function Profile({ user }) {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>

            <div style={{ color: "white",marginLeft:"39em",marginTop:"5em" }}>
                <h1>Profile</h1>
                <label>name</label>
                <h3 >{user.name}</h3>
                <label>email</label>
                <h3>{user.email}</h3>
                <label>date of birth</label>
                <h3>{user.DateOfBirth}</h3>
            </div>

        </div>
    )
}

export default Profile
