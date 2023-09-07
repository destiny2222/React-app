import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';

function App() {
  
  return (
    <>
       <Header />
       <Routes path='/'>
        <Route path='' element={ <Main /> } />
        <Route path='auth' element={ <Auth /> } />
        
       </Routes>
       <Footer />
    </>
  );
}

export default App;
