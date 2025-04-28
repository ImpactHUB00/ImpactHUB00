import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import logo from './image.jpg';
import './App.css';
<<<<<<< HEAD
import logos from './image.png';
=======
>>>>>>> 7c179afb390bec65f3201e5c8be119f5783c9d75
import Stack from 'react-bootstrap/Stack';
const Footer = () => {
  return <div className="chenar-jos">Contact: impacthub00@gmail.com</div>;
};
export default function Home() {
    return (
        <div className="App">
          <div className="content">
<<<<<<< HEAD
          <div className="chenar">
=======
             <div className="chenar">
>>>>>>> 7c179afb390bec65f3201e5c8be119f5783c9d75
      
      <Stack direction="horizontal" gap={1}>
      <div className="text-login">
    
      
      <Link to="/pagetwo">
      <Button class="butonlogin">Login</Button>
      </Link>

    </div>
<<<<<<< HEAD
    <div class="header-titlu-poza">
    <div className="p-2">ImpactHUB</div> 
    <img src={logos} className="image-logo" alt="logos" />
</div>
    
    
=======
    <div className="p-2">ImpactHUB</div>
>>>>>>> 7c179afb390bec65f3201e5c8be119f5783c9d75
      </Stack>
        </div>
           
            <div className="image-text-container">
          <div className="text-container">
          <div class="text-content-title">What is this site about?</div>
          <div class="text-content">ImpactHUB is a dynamic app designed to connect passionate volunteers with meaningful opportunities. Whether you're looking to support local communities, contribute to environmental projects, or assist in global humanitarian efforts, our platform makes it easy to find and join initiatives that match your skills and interests. With an intuitive interface, real-time updates, and a built-in tracking system, ImpactHUB ensures a seamless experience for both volunteers and organizations.</div>
          </div>
          <img src={logo} className="image-text-container-img" alt="logo" />
          
      </div>
      <div className="image-text-container">
          <div className="text-container">
          <div class="text-content-title">What is this site about?</div>
          <div class="text-content">ImpactHUB is a dynamic app designed to connect passionate volunteers with meaningful opportunities. Whether you're looking to support local communities, contribute to environmental projects, or assist in global humanitarian efforts, our platform makes it easy to find and join initiatives that match your skills and interests. With an intuitive interface, real-time updates, and a built-in tracking system, ImpactHUB ensures a seamless experience for both volunteers and organizations.</div>
          </div>
          <img src={logo} className="image-text-container-img" alt="logo" />
          
      </div>
      
      
    <Footer/>
    </div>
        </div>
        
    );
}




