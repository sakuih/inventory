import { useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function UpdateModal ( { isOpen, onClose } ) {



  //if (props.showModalClick)
    //setShow(true)
  /*
    <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button>
    */
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
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={1} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )



}
export default UpdateModal
