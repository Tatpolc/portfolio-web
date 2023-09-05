import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
import AboutMe from './AboutMe';
import NotFound from './NotFound';
import Skills from './Skills';

function App() {
  return (
    <BrowserRouter basename="/portfolio-web">
      <body>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </body>
    </BrowserRouter>
  );
}

export default App;
