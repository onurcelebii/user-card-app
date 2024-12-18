import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

function AddTodo(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => { setShow(false); };
  const handleShow = () => { setShow(true); };

  const [todoId, setTodoId] = useState("");
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [dueOn, setDueOn] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
  }, []);

  const baseURL = `https://gorest.co.in/public/v2/users/${props.userId}/todos`;

  const addUser = () => { /// post istegi atıldıgında kayıt atıldıgına dair teyidi donen http 201 kodu ile alert ile teyit ediyoruz , normalde add ardından get yaparak liste cekmek istedigimizde her defasında farklı
    // veri geliyor. api data sı üzerinde degisiklik yapılamıyor..

    if (!todoId && !userId && !title && !dueOn && !status) {
      window.alert("Fields must be fiil !!");
      return;
    }
    axios
      .post(
        baseURL,
        {
          todoId: todoId,
          userId: userId,
          title: title,
          dueOn: dueOn,
          status: status,
        },
        {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          window.alert(`Todo added successfully`);
          // window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>TodoId</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setTodoId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>User Id</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setUserId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>DueOn</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setDueOn(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setStatus(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="primary" onClick={addUser}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddTodo;
