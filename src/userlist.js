import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
   
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Username:</strong> {user.username}<br />
            <strong>Website:</strong> {user.website}<br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
