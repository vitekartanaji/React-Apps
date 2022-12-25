import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserType } from "./user-list";
import UserModel from "./user-ModelBox";

const UserCard=(props:UserType)=>{

  const [showModel,setShowModel]=useState(false);
  const handleClose = () => setShowModel(false);
  const handleShow = () => setShowModel(true);

  const [showModel2,setShowModel2]=useState(false);
  const handleClose2 = () => setShowModel2(false);
  const handleShow2 = () => setShowModel2(true);
  
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
          <Link to={`/user-details/${props.id}/${props.login}`}  type="button float-end" className="btn btn-primary btn-sm float-end">More Details</Link>
        </Card.Body>
        <UserModel showModel={showModel} handleClose={handleClose} photo={props.avatar_url} name={props.login}/>
      </Card>
</>
    )
}
export default UserCard;
