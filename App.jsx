import "./App.css";
import React, { useState } from "react";


function App() {
  const [users, setUsers] = useState([]);


  const getUsers = async () => {

    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <div>

        <button className="btn" onClick={getUsers}>
          Get Users
        </button>

      <div className="row">
        {users?.map((current, index) => {

          return (
            <div className="container" key={index}>
              <div className="card">
                <img src={current.avatar} className="card-img-top" alt="..." />
                <h3 className="card-title">
                   {current.first_name} {current.last_name}
                </h3>
                <h4 className="card-text">E-mail: {current.email}</h4><br></br>
                <button class="info">Info</button><br></br><br></br>
                <div class="social">
                  <ul>
                    <li><a href=""><i class="facebook fa fa-facebook-square"></i></a></li>
                    <li><a href=""><i class="instagram fa fa-instagram"></i></a></li>
                    <li><a href=""><i class="twitter fa fa-twitter-square"></i></a></li>
                    <li><a href=""><i class="linkedin fa fa-linkedin-square"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="about">
              <hr></hr><h1>About</h1><hr></hr>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro at ullam magni, quaerat beatae fugit? Officia nemo id aut dolor dolores rerum quisquam aperiam. Amet praesentium ullam vel. Harum id, iusto quo maxime, modi debitis dolore nisi officia placeat amet ducimus. Similique numquam quia nobis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem asperiores, mollitia repudiandae odit dolorem consequatur architecto nihil fugiat quibusdam provident perspiciatis cum veritatis voluptatum iure, vel magnam adipisci blan
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris ni
              </p>
              </div>
            </div>

          );

        })}
      </div>
    </div>
  );
}



export default App;
