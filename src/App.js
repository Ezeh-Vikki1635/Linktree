

import Links from './files/Links';
import Footer from './files/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contact from './files/Contact';

function App() {
  return (
    <BrowserRouter>
     
      
      <Routes>
        {/* <Route path="/" element={<Profile />} > */}
          <Route index element={<Links />} />
          
          <Route path="/contact" element={<Contact />} />
          
        {/* </Route> */}
      </Routes>
  <Footer/>
    </BrowserRouter>

  );
}

export default App;
