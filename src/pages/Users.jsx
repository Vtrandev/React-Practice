import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState({});
  const { usename } = useParams();

  async function main() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${usename}`
    );
    console.log(data);
    setUsers(data);
  }

  useEffect(() => {
    main();
  }, []);

  return (
    <div>
      <h1>{users.id}</h1>
      <h1>{users.name}</h1>
      <h1>{users.phone}</h1>
      <h1>{users.email}</h1>
      <h1>{users.username}</h1>
      <h1>{users.website}</h1>
      {/* <h1>{users.address}</h1> */}
    </div>
  );
}

export default Users;
