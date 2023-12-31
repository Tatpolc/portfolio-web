import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
import AboutMe from './AboutMe';
import NotFound from './NotFound';
import Skills from './Skills';
import Projects from './Project';

function App() {
  return (
    <BrowserRouter basename="/portfolio-web">
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="p-3 flex-grow items-center my-5 mx-auto w-11/12 overflow-y-auto overflow-x-hidden">
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/skills" element={<Skills />}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/about" element={<AboutMe />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </body>
    </BrowserRouter>
  );
}

export default App;
