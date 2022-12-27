import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export const FormExample = ()=> {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event:any) => {
    const form = event.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
const testValidation = (e:any)=>{
    const target = e.target;
    console.log(target?.validationMessage)
}
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            pattern="^[a-zA-Z]+ [a-zA-Z]+$"
            placeholder="Last name"
            defaultValue=""
          />
          <Form.Text id="passwordHelpBlock" muted>
            Add First name and last name e.g. 'Raja Rancho'
            </Form.Text>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
{/* ---------------------------------------------------------------------------------------------------- */}
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Mobile Number</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
          <Form.Control
            required
            pattern="/((09|03|07|08|05)([0-9]{8}))/" 
            type="number"
            placeholder="Phone number"
          />
          <Form.Control.Feedback type="invalid">Please provide a valid mobile number.</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
{/* =============================================================================================== */}
      <Row className="mb-3">
      <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}" 
            type="text"
            placeholder="Enter email"
          />
        <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
        </Form.Group>
{/* -------------------------------------------------------------------------------------------------- */}
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}" 
            type="password"
            placeholder="Enter password"
          />
        <Form.Control.Feedback type="invalid">The password must contain at least 1 upper case, 1 lower case,
         1 special character & must be more than 8 digits.</Form.Control.Feedback>
         </Form.Group>
      </Row>
{/* ====================================================================================================== */}
    <Row className="mb-3">
      <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            // pattern="^[a-zA-Z]+ [a-zA-Z]+$" 
            type="text"
            placeholder="Enter address line 1"
          />
        </Form.Group>
        </Row>
{/* ====================================================================================================== */}
<Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            // pattern="^[a-zA-Z]+ [a-zA-Z]+$" 
            type="text"
            placeholder="Enter address line 2"
          />
        </Form.Group>
      </Row>
{/* ====================================================================================================== */}
<Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
{/* -------------------------------------------------------------------------------------------------- */}
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
{/* -------------------------------------------------------------------------------------------------- */}
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
          type="number" 
          placeholder="Zip" 
          required 
          pattern="\d{10}"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
{/* ====================================================================================================== */}
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Check me out"
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}
