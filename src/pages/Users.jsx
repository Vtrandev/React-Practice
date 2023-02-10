import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import User from "../components/User";

function Users() {
  const { username } = useParams();
  const [user, setUser] = useState([]);

  //"https://jsonplaceholder.typicode.com/users"

  async function fetchUser() {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${username}`);
    setUser(data);
}

  useEffect(() => {
    fetchUser()
  }, []);

  return <div>
    <h1>{user.id}</h1>
    <h1>{user.name}</h1>
    <h1>{user.email}</h1>
    <h1>{user.username}</h1>
  </div>;
}

export default Users;
