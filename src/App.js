
import './App.css';
<<<<<<< HEAD
import logos from './image.png';
=======

>>>>>>> 7c179afb390bec65f3201e5c8be119f5783c9d75
import Stack from 'react-bootstrap/Stack';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import PageTwo from "./PageTwo.jsx";
import RegisterVol from "./RegisterVolunteers.jsx";
import RegisterOrg from "./RegisterOrganisations.jsx";

function App() {
  return (
    <div className="App">
      <div className="content">
      <header className="App-header">
      
      
        
      </header>
     
      
    <div className="chenar">
<<<<<<< HEAD
    
      <Stack direction="horizontal" gap={2}>
=======
      
      <Stack direction="horizontal" gap={1}>
>>>>>>> 7c179afb390bec65f3201e5c8be119f5783c9d75
      <div className="text-login">
    
      
    

    </div>
<<<<<<< HEAD
    
    <div className="p-2">ImpactHUB</div> 
    
=======
    <div className="p-2">ImpactHUB</div>
>>>>>>> 7c179afb390bec65f3201e5c8be119f5783c9d75
      </Stack>
        </div>
        
       
        <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/pagetwo" element={<PageTwo />} />
        <Route path="/registervol" element={<RegisterVol />} />
        <Route path="/registerorg" element={<RegisterOrg />} />
      </Routes>
    </BrowserRouter>
    
   
    </div>
    </div>
    
  );
}

export default App;
