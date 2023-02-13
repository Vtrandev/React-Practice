import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "../components/User";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 100);
  }, []);

  return (
    <div>
      {users.map((users) => (
        <Link to={`/users/${users.id}`} key={users.id}>
        <User
          id={users.id}
          name={users.name}
          email={users.email}
          username={users.username}
        />
        </Link>
      ))}
    </div>
  );
}

export default Home;
