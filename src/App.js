import runQuery from './services/cryptoApi';
import React from 'react';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';
//import Navbar from './components/Navbar';
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import './App.css';
import 'antd/dist/antd.css';
const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                    
                        <Routes>
                            {/* home page path */}
                            <Route exact path="/" element={<Homepage />} />
                            
                            {/*path to the exchange */}
                            <Route exact path="/exchanges" element={<Exchanges />} />
                            
                            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}/>
                            
                            <Route exact path="/crypto/:coinId" element={<CryptoDetails />}/>
                            
                            <Route exact path="/news" element={<News />}/>
                            
                        </Routes>
                    
                    </div>
                </Layout>
            
                <div className="footer" style={{margin:"0px"}}>
                    <div>
                        <h3 className="footerElement">CryptoDashboard</h3>
                        <h3 className="footerElement">All rights reserved</h3>
                    </div>

                    {/*space tag puts spaces between the below tags */}
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div> {/* footer div closing tag */}
            </div> {/* main div closing tag */}
        </div>
    )
}

export default App 