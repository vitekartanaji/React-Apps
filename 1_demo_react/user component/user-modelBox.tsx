import React from 'react'
import { Modal, Card, Button } from 'react-bootstrap';
import { UserType } from './user-list';

type propList={
    showModel:boolean;
    handleClose:()=>void;
    photo:string;
    name:string;
}

const UserModel = (props:propList) => {
  return (
    <>
    <Modal show={props.showModel} onHide={props.handleClose} >
<Modal.Header closeButton>
  <Modal.Title>Profile</Modal.Title>
</Modal.Header>
<Modal.Body>
  <Card>
        <Card.Img variant="top" src={props.photo} style={{ width: '28rem', height:'20rem'}}/>
        <Card.Body>
          <Card.Text>
            <p><b>Name:</b>{props.name}</p>
          </Card.Text>
        </Card.Body>
        </Card>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={props.handleClose}>Close</Button>
  <Button variant="primary" onClick={props.handleClose}>Save Changes</Button>
</Modal.Footer>
</Modal>
    </>
  )
}

export default UserModel;
