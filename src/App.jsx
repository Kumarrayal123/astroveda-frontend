import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Astrology from './pages/Astrology';
import Palmistry from './pages/Palmistry';
import Numerology from './pages/Numerology';
import Vastu from './pages/Vastu';
import Tantra from './pages/Tantra';
import Horoscope from './pages/Horoscope'
import Booking from './pages/Booking';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Admin Route - Isolated from Layout */}
        <Route
          path='/admin'
          element={
            <ProtectedRoute role="admin">
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* Public Routes - Wrapped in Layout */}
        <Route
          path='*'
          element={
            <Layout>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path='/astrology' element={<Astrology />}></Route>
                  <Route path='/palmistry' element={<Palmistry />}></Route>
                  <Route path='/numerology' element={<Numerology />}></Route>
                  <Route path='/vastu' element={<Vastu />}></Route>
                  <Route path='/tantra' element={<Tantra />}></Route>
                  <Route path='/horoscope' element={<Horoscope />}></Route>
                  <Route path='/booking' element={<Booking />}></Route>
                  <Route path='/login' element={<Login />}></Route>
                  <Route path='/register' element={<Register />}></Route>
                </Routes>
              </AnimatePresence>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
