import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDelete from "./userDelete";
import UserEdit from "./userEdit";
import "./userEditCard.css";
import UserDetail from "./userDetail";
import CreateUser from "./userCreate";
import "semantic-ui-css/semantic.min.css";

const UserEditCard = () => {
  const baseURL = "https://gorest.co.in/public/v2/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    localStorage.setItem(
      "accessToken",
      "Bearer c3046ba37d1eb067a03fb88a2468c439506fdff0781504aefd8255c9727a8848"
    );
    axios
      .get(baseURL)
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {users.map((user) => (
        <Card style={{ width: "18rem", margin: "10px" }} key={user.id}>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>ID: {user.id}</ListGroup.Item>
              <ListGroup.Item>NAME: {user.name}</ListGroup.Item>
              <ListGroup.Item>EMAIL: {user.email}</ListGroup.Item>
              <ListGroup.Item>GENDER: {user.gender}</ListGroup.Item>
              <ListGroup.Item>STATUS: {user.status}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <div className="d-flex justify-content-center button">
            <UserEdit data={user.id} />
            <UserDelete data={user.id} />
            <UserDetail data={user.id} />
          </div>
        </Card>
      ))}
      <div className="createUser">
        <CreateUser />
      </div>
    </div>
  );
};

export default UserEditCard;
