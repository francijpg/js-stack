import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";

    axios.get(url)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          response.data.forEach((element) => {
            let userData = {
              id: element.id,
              name: element.name,
              website: element.website,
            };
            setUsers((users) => [...users, userData]);
          });
        }
      }, (error) => {
        console.log(error.response.status)
        console.log(error);
      })
  }, []);

  return (
    <>
      <h3>JsonPlaceHolder User List</h3>
      {users.map((userData) => (
        <figure key={userData.id}>
          <figcaption>{userData.name}</figcaption>
          <figcaption>{userData.website}</figcaption>
        </figure>
      ))}
    </>
  );
};

export default UserList;
