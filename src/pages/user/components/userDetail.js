import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DetailTable from "./detailTable";
import AddTodo from "./addTodo";


const UserDetail = (props) => {
  const [show, setShow] = useState(false);
  const [isTodoOpen, setIsTodoOpen] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () =>  {
    setShow(true);
    getTodos();
  }

  const openAddTodo = () => {
    setIsTodoOpen(true);
  };

  const closeAddTodo = () => {
    setIsTodoOpen(false);
  };


  const baseURL = `https://gorest.co.in/public/v2/users/${props.data}/todos`;
  const [todos, setTodos] = useState([]);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  function getTodos() {
    axios
      .get(baseURL, config)
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <Button variant="info" onClick={handleShow} style={{ width: 80 }}>
        DETAIL
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {todos.length === 0 ? (
            "No data to display"
          ) : (
            <DetailTable data={todos} />
          )}
        </Modal.Body>
        <Modal.Footer>
          {isTodoOpen ? <AddTodo   userId={props.data} />  : null}
          <Button variant="primary" onClick={openAddTodo}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserDetail;
