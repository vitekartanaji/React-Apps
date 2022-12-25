import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { UserType } from "./user-list";
import UserModel from "./user-ModelBox";

const UserCard=(props:UserType)=>{

  const [show,setShow]=useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return(
        <>
        <Card>
        <Card.Img variant="top" src={props.avatar_url} />
        <Card.Body>
          <Card.Text>
            <p><b>Name:</b>{props.login}</p>
            <p><b>URL:</b><a href={props.html_url}>{props.html_url}</a></p>
          </Card.Text>
          <Button variant="primary" size="sm" onClick={handleShow} >See Profile</Button>
          <Button variant="primary float-end" size="sm" >More Details</Button>
          {/* <UserModel photo={props.avatar_url} name={props.login} show={show} handleClose={handleClose}/> */}
        </Card.Body>
      </Card>
        </>
    )
}

export default UserCard;
