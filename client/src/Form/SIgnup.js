import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";

const SIgnup = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const res = await axios.get("http://15.207.88.100:5000/api/users", {
        headers: { "Content-Type": "application/json" },
      });
      // console.log(res);
      if (res !== null) {
        res.data.data.map((user) => setUsers([...users, user]));
      }
      console.log(users);
    }
    fetchUsers();
  }, [setUsers]);

  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(info)

    try {
      const res = await axios.post("http://15.207.88.100:5000/api/users/signup", info, {
        headers: { "Content-Type": "application/json" },
      });

      console.log(res);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={info.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={info.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="placeholder"
          name="password"
          value={info.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <hr />

      <div>
        <p>Users</p>
        {/* {users.length > 0 ? (
          users.map((user) => <h1>{user.name}</h1>)
        ) : (
          <h1>No Users</h1>
        )} */}
        {users.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
    </Fragment>
  );
};

export default SIgnup;
