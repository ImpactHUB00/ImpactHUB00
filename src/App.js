
import './App.css';

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
      
      <Stack direction="horizontal" gap={1}>
      <div className="text-login">
    
      
    

    </div>
    <div className="p-2">ImpactHUB</div>
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
