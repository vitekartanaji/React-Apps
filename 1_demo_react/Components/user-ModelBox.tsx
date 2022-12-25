import { Button, Card, Modal } from "react-bootstrap";
import { UserType } from "./user-list";

const UserModel=(props:{photo:string,name:string,show:boolean, handleClose: ()=>void})=>{
    return(
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Profile Photo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Card.Img variant="top" src={props.photo} />
        <p><b>Name</b>{props.name}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default UserModel;
