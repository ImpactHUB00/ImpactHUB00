import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';



const counties = [
    "Alba", "Arad", "Argeș", "Bacău", "Bihor", "Bistrița-Năsăud", "Botoșani", "Brașov",
    "Brăila", "Buzău", "Caraș-Severin", "Călărași", "Cluj", "Constanța", "Covasna", "Dâmbovița",
    "Dolj", "Galați", "Giurgiu", "Gorj", "Harghita", "Hunedoara", "Ialomița", "Iași", "Ilfov",
    "Maramureș", "Mehedinți", "Mureș", "Neamț", "Olt", "Prahova", "Satu Mare", "Sălaj",
    "Sibiu", "Suceava", "Teleorman", "Timiș", "Tulcea", "Vaslui", "Vâlcea", "Vrancea"
  ].sort();
  
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderbottom:"30px",
    
  };
  
  export default function Register() {
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
      <h1>Register</h1>
      <h2>For Organisations</h2>
      </div>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="text-content-login"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" className="text-content-login" >
        <Form.Control type="password" placeholder="Password"  />
      </FloatingLabel>
      <Form>
      <Row>

      <Form.Group as={Col} controlId="formGridState">
      
      <Form.Select defaultValue="Choose...">
      <option disabled>Choose...</option>
      {counties.map((county, index) => (
        <option key={index}>{county}</option>
      ))}

    </Form.Select>
    <Form.Label className="text-content-login">County</Form.Label>
    </Form.Group>
    
         
    
        <Col>
          <Form.Control placeholder="Name Organisation" />
        </Col>
        <div style={formStyle}>  
        <div style={{ width: "max-content",height:"100px", padding: "10px",borderbottom:"30px"}}>
      <form>
      <label className="text-content-login">Name:</label>
      <textarea style={{ width: "100%",height:"100px"}}>
        
        </textarea>
        
      </form>
    </div>
    </div>
      </Row>
    </Form>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Button type="submit">Submit form</Button>
    </Form>
    

      <div className="chenar">
      
      <Stack direction="horizontal" gap={1}>
      <div className="text-login">
    
      
      <Link to="/">
      <Button class="butonlogin">Back home</Button>
      </Link>


    </div>
    <div className="p-2">ImpactHUB</div>
      </Stack>
        </div>
       
    </div>
    
  );
}