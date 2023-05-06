import React from 'react';
import { Layout} from 'antd';

const {  Footer } = Layout;

import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'

import {Footer as Pie} from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NovedadesPage from './pages/NovedadesPage';
import NosotrosPage from './pages/NosotrosPage';
import ThemeProvider from "./styles/ThemeProvider";

export const App = (props)  => {
    return (
        <div className="App">
            <ThemeProvider>

                {/*<Header/>*/}
                <BrowserRouter>
                <Nav/>
                <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="nosotros" element={<NosotrosPage/>} />
                <Route path="novedades" element={<NovedadesPage/>} />
                <Route path="contacto" element={<ContactoPage/>} />
                </Routes>
                </BrowserRouter>
                <Footer>
                    <Pie/>
                </Footer>
            </ThemeProvider>
        </div>
    );
};

export default App;