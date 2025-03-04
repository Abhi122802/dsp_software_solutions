import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Header from './components/header/header.js';
import Home from './pages/Home/Home.js';
import Listing from './pages/Listing/listing.js';
import Footer from "./components/footer/footer.js";
import NotFound from "./pages/NotFound/NotFound.js";
import Details from './pages/Details/Details.js';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      
      <Routes>
          <Route exact = {true} path ="/" element={<Home/>} />
          <Route exact = {true} path ="/listing" element={<Listing/>} />
          <Route exact = {true} path ="*" element={<NotFound/>} />
          <Route exact = {true} path ="/product/details" element={<Details/>} />          
      </Routes>
      <Footer/>  
    </BrowserRouter>

  );
}

export default App;
