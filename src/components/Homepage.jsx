import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic} from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery} from '../services/cryptoApi';
const { Title} = Typography;

const Homepage = () => {
    const { data, isFetching} = useGetCryptosQuery();
    console.log("data:"+ JSON.stringify(data));
    return (
        <div>
            <Title level = {2} className="heading">Global Crypto Stats</Title>
            <Row>
                {/* for value attribute 5 is a placeholder will fetch real data*/}
                <Col span={12}><Statistic title="Total Cryptocurrencies" value="5"/></Col>  {/* <== This Col will take up 12 spaces which half of the width of the screen as there are 24 spaces in Ant as opposed to 12 in bootstrap*/}
                <Col span={12}><Statistic title="Total Exchanges" value="5"/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value="5"/></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value="5"/></Col>
                <Col span={12}><Statistic title="Total Markets" value="5"/></Col>
            </Row> 
        </div>
    )
}

export default Homepage