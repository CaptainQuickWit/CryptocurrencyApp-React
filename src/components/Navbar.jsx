import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';
import {Button, Menu, Avatar} from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrencyICON.png';
const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                    {/*<Button className="menu-control-container">
                    
                    </Button>*/}
                </Typography.Title>
            </div>

        </div>
    )
}

export default Navbar;