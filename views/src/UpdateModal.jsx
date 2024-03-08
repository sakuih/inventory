import { useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function UpdateModal ( { isOpen, onClose, updateName, updateDesc, closeModalAndPut } ) {




  return (
  <>

    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <input  onChange={updateName}
                    className="form-control"
                    type="text"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Description</Form.Label>
            <input  onChange={updateDesc}
                    className="form-control"
                    type="text"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={closeModalAndPut}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )



}
export default UpdateModal
