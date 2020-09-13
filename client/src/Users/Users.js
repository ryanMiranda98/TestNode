import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
    let users;
  useEffect(() => {
      async function fetchUsers() {
          users = await axios.get("http://localhost:5000/api/users/", {
        headers: { "Content-Type": "application/json" },
      });
      console.log(users);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <p>Users</p>
      {users.length > 0 ? users : <h1>No Users</h1>}
    </div>
  );
};

export default Users;
