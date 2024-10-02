import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import BmiPage from './Page/BmiPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import HomePage from './Page/HomePage';
import AboutPage from './Page/AboutPage';
import ContactPage from './Page/ContactPage';
import Error404Page from './Page/Error404Page';

function App() {

    return (
        <BrowserRouter>
            <AppSection>
                <AppContainer>
                <Navbar />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='bmi' element={<BmiPage />} />
                        <Route path='about' element={<AboutPage />} />
                        <Route path='contact' element={<ContactPage />} />
                        <Route path='*' element={<Error404Page /> } />
                    </Routes>   
                </AppContainer>
            </AppSection>
        </BrowserRouter>    
    );
}

const AppSection = styled.section`
  padding: 20px;
`;

const AppContainer = styled.section`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

export default App;
