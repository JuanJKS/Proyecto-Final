import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import MatematicaPage from './pages/MatematicaPage';
import FisicaPage from './pages/FisicaPage';
import MisClasesPage from './pages/MisClasesPage';
import SobreMiPage from './pages/SobreMiPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='matematica' element={<MatematicaPage/>}/>
          <Route path='fisica' element={<FisicaPage/>}/>
          <Route path='misclases' element={<MisClasesPage/>}/>
          <Route path='sobremi' element={<SobreMiPage/>}/>
          <Route path='contacto' element={<ContactoPage/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/> 
    </div>
  );
}

export default App;
