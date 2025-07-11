
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import logos from './image.png';
import { useState } from 'react';
export default function PageTwo() {
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
      <h1>Login</h1>
      </div>
      
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="text-content-login"
      >
        
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      
      <FloatingLabel controlId="floatingPassword" label="Password"
         className="text-content-login"
        >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Link to="/mainpage">
      <Button type="submit">Login</Button>
      </Link>
    </Form>
      <div className="chenar">
      
      <Stack direction="horizontal" gap={1}>
      <div className="text-login">
    
      
      <Link to="/">
      <Button class="butonlogin">Back homeee</Button>
      </Link>

    </div>
    <div class="header-titlu-poza">
    <div className="p-2">ImpactHUB</div> 
    <img src={logos} className="image-logo" alt="logos" />
</div>
      </Stack>
        </div>
        <div className="text-content-title-login">
      <h2>If you dont have an account:</h2>
      </div>
        <Link to="/registervol">
      <Button class="butonlogin">For Volunteers</Button>
      </Link>
      <Link to="/registerorg">
      <Button class="butonlogin">For Organizations</Button>
      </Link>
      
    </div>
    
  );
}