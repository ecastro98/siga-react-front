import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './pages/Index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <Router>  
            <div className='container'>
                <Header/>
                <Route path='/' component={Index} />  
                <Footer/>  
            </div> 
        </Router>  
    );
};

export default App;
