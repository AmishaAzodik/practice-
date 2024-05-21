import axios from "axios"
import { useCallback, useEffect, useState } from 'react'
import "./Main.css" 

type objUser = {
    id:number;
    name:string;
    username:string;
    address:never;
    phone:number;
    company:never;
    email:string;
}


const Main = () => {

    const [user,setUser] = useState([]);

    const fetchUser = useCallback(async()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/Users");
        const responseData = await response.data;
        setUser(responseData);
    },[])
    
    
useEffect(()=>{
    
        fetchUser();

},[fetchUser])




  return (
    <div>

        <h2>User Details</h2>
        <table id="table" >
            <tbody>
            <tr >
                <th >Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        
        {user.map((u:objUser,i:number)=>(
            <tr key={i}>
            <td >{u.id}</td>
            <td>{u.name}</td>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.phone}</td>
        </tr>
        )
    
    
)}

        </tbody>
        </table>
    </div>
  )
}

export default Main