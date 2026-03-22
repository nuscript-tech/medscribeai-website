import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home';
import Platform from './pages/Platform';
import ForMTSOs from './pages/ForMTSOs';
import HowItWorks from './pages/HowItWorks';
import WhyMedScribeAI from './pages/WhyMedScribeAI';
import Pricing from './pages/Pricing';
import RequestDemo from './pages/RequestDemo';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Platform" element={<Platform />} />
          <Route path="/ForMTSOs" element={<ForMTSOs />} />
          <Route path="/HowItWorks" element={<HowItWorks />} />
          <Route path="/WhyMedScribeAI" element={<WhyMedScribeAI />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/RequestDemo" element={<RequestDemo />} />
          <Route path="/About" element={<About />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
