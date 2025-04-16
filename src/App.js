import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer';
import Gift from './Gift/gift';
import Customized from './Gift/customized';
import ListCustomized from './Gift/listcustomized';

function App() {
  return (
    <div>
      {/* Navbar is placed outside Routes */}
      <Navbar />
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home />} />
        {/* Uncomment the following lines to add more pages */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/gift" element={<Gift />} />
        <Route path="/cus" element={<ListCustomized />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
