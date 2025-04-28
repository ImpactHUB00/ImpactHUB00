import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./App.css";
import Stack from 'react-bootstrap/Stack';
import logos from './image.png';
import React from 'react';

  
export default function MainPage() {
  
  return (
    <div>
      <div className="text-content-title-login">
      <h1>Main Page</h1>
      </div>
      
     
     
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