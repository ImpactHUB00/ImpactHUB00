import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import logo from './image.jpg';
import './App.css';
import Stack from 'react-bootstrap/Stack';
const Footer = () => {
  return <div className="chenar-jos">Contact: impacthub00@gmail.com</div>;
};
export default function Home() {
    return (
        <div className="App">
          <div className="content">
             <div className="chenar">
      
      <Stack direction="horizontal" gap={1}>
      <div className="text-login">
    
      
      <Link to="/pagetwo">
      <Button class="butonlogin">Login</Button>
      </Link>

    </div>
    <div className="p-2">ImpactHUB</div>
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




