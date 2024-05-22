"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./page.css";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";


type objUser = {
  id: number;
  name: string;
  username: string;
  address: never;
  phone: number;
  company: never;
  email: string;
};

const page = () => {
  const [user, setUser] = useState([]);

  const fetchUser = useCallback(async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/Users"
    );
    const responseData = await response.data;
    setUser(responseData);
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div>
        <Nav/>
        
      <h2>User Details</h2>
      <table id="table">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>

          {user.map((u: objUser, i: number) => (
            <tr key={i}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer/>
    </div>
  );
};

export default page;
