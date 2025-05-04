import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./App.css";
import Stack from 'react-bootstrap/Stack';
import logos from './image.png';
import React from 'react';

import { useState } from 'react';


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderbottom:"30px",
    
  };
  
export default function CreateVolForm() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }    
      setValidated(true);
      };
  return (
    <div>
      <div className="text-content-title-login">
      <h1>Make your volunteering opportunity!</h1>
      </div>
      
      
      <Form>
      <Row>
      <Form.Group as={Col} controlId="formGridState">
          
          <Form.Select defaultValue="Choose...">
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18+</option>
          </Form.Select>
          <Form.Label className="text-content-login">Age</Form.Label>
        </Form.Group>

    
         
    
        <Col>
          <Form.Control placeholder="Event Name:" />
        </Col>
        <div style={formStyle}>  
        <div style={{ width: "max-content",height:"100px", padding: "10px",borderbottom:"30px"}}>
      <form>
      <label className="text-content-login">Description(What the volunteering opportunity is about,contact details,forms for registeering):</label>
      <textarea style={{ width: "100%",height:"100px"}}>
        
        </textarea>
        
      </form>
    </div>
    </div>
      </Row>
    </Form>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Link to="/createvol">
      <Button type="submit">Submit</Button>
      </Link>
    </Form>
      
     
      <div className="chenar">
      
      <Stack direction="horizontal" gap={1}>
      <div className="text-login">
    
      
      <Link to="/">
      <Button class="butonlogin">Back home</Button>
      </Link>
      <Link to="/createform1">
      <Button class="butonlogin">Form</Button>
      </Link>
    </div>
    <div class="header-titlu-poza">
    <div className="p-2">ImpactHUB</div> 
    <img src={logos} className="image-logo" alt="logos" />
</div>
      </Stack>
        </div>

    </div>
    
  );
}