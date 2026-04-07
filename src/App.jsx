import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import Platform from './pages/Platform';
import ForMTSOs from './pages/ForMTSOs';
import HowItWorks from './pages/HowItWorks';
import WhyUs from './pages/WhyUs';
import RequestDemo from './pages/RequestDemo';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/for-mtsos" element={<ForMTSOs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
