import axios from 'axios'
import { useEffect, useState } from 'react'
import "./Main.css" 

const Main = () => {

    const [user,setUser] = useState([]);
useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/Users")
    .then((res)=>{setUser(res.data)
        console.log(user)
    })
},[])



  return (
    <div>

        <h2>User Details</h2>
        <table id="table" >
            <tr>
                <th >Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        
        {user.map((u,i)=>(
            <tr>
            <td >{u.id}</td>
            <td>{u.name}</td>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.phone}</td>
        </tr>
        )
    
    
)}

        
        </table>
    </div>
  )
}

export default Main