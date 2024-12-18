import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const UserDelete = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteUser = (value) => {
    axios
      .delete(`https://gorest.co.in/public/v2/users/${value}`, {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        if (res.status === 204) {
          window.alert(`ID'si ${value} olan kullanıcı silindi.`);
          window.location.reload();
        }
      });
  };

  return (
    <>
      <Button
        className="danger-button"
        variant="danger"
        style={{ width: 80 }}
        onClick={handleShow}
      >
        DELETE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="alert alert-danger">
            Are you sure you want to delete?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteUser(props.data)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserDelete;
