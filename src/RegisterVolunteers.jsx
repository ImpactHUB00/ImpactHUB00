import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import logos from './image.png';

const counties = [
    "Alba", "Arad", "Argeș", "Bacău", "Bihor", "Bistrița-Năsăud", "Botoșani", "Brașov",
    "Brăila", "Buzău", "Caraș-Severin", "Călărași", "Cluj", "Constanța", "Covasna", "Dâmbovița",
    "Dolj", "Galați", "Giurgiu", "Gorj", "Harghita", "Hunedoara", "Ialomița", "Iași", "Ilfov",
    "Maramureș", "Mehedinți", "Mureș", "Neamț", "Olt", "Prahova", "Satu Mare", "Sălaj",
    "Sibiu", "Suceava", "Teleorman", "Timiș", "Tulcea", "Vaslui", "Vâlcea", "Vrancea"
  ].sort();
  
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
      <h2>For Volunteers</h2>
      </div>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="text-content-login"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" className="text-content-login">
        <Form.Control type="password" placeholder="Password" />
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
          <Form.Control placeholder="First name"  />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
          
        </Col>
      </Row>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Link to="/mainpage">
      <Button type="submit">Submit</Button>
      </Link>
    </Form>
    </Form>
    
        
      <div className="chenar">
      
      <Stack direction="horizontal" gap={1}>
      <div className="text-login">
    
      
      <Link to="/">
      <Button class="butonlogin">Back home</Button>
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