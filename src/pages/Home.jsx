import React, { useEffect, useState } from "react";
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
      fetchUsers();
  }, []);

  const pixels = "3px";

  return (
    <div>
      {users.map((user) => (
        
        <Link to={`/users/${user.id}`} key={user.id}>
        <User
          id={user.id}
          name={user.name}
          email={user.email}
          username={user.username}
        />
        </Link>
      ))}
    </div>
  );

  //   Loading page and if array.length greater than 0 load the name
  return (
    <div>
      {users.length > 0 ? (
        <h1>{users.length > 0 && users[0].name}</h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Home;
