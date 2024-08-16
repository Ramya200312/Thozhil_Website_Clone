import React from 'react';
import { Routes, Route ,Navigate} from 'react-router-dom';
import Home from './NewPro/Home';
import HowItWorks from './NewPro/HowItWorks';
import NavBar from './NewPro/NavBar';
import Footer1 from './NewPro/Footer1'
import FAQ from './NewPro/FAQ';
import FullTime from './NewPro/FullTime';
import LoginForm from './NewPro/LoginForm';
import PartTime from './NewPro/PartTime';
import InternFulltime from './NewPro/InternFulltime';
import InternParttime from './NewPro/InternParttime';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/jobs/fulltime' element={<FullTime />} />
        <Route path='/jobs/parttime' element={<PartTime />} />
        <Route path='/internships/fulltime' element={<InternFulltime />} />
        <Route path='/internships/parttime' element={<InternParttime />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/login" element={<LoginForm /> } />
      </Routes>
      <Footer1/>
      
      
    </>
  );
}

export default App;
