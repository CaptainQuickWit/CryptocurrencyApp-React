import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic} from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
const { Title } = Typography;

const Homepage = () => {
    
    
    const {data, loading, error, isFetching} = useGetCryptosQuery();
    //console.log("data:"+ JSON.stringify(data));
    const globalStats = data?.data?.stats;
    //globalStats = JSON.stringify(globalStats);
    //console.log("DATA: "+globalStats);

    if (isFetching) return 'Loading ...';
    
    /**
     * If globalStates has a value it will render the values else render message to user that the data could not be retrieived. 
     */
    if (globalStats) {
        return (
            <div>
                <Title level = {2} className="heading">Global Crypto Stats</Title>
                <Row>
                    {/* for value attribute 5 is a placeholder will fetch real data*/}
                    <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats ? globalStats.total : "N/A" }/></Col>  {/* globalStats.total <== This Col will take up 12 spaces which half of the width of the screen as there are 24 spaces in Ant as opposed to 12 in bootstrap*/}
                    <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                    <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                    <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                    <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
                </Row> 
            </div>
        )
    } else {
        return (
            <div>
                <h3 className="text-center">Unable to fetch data from server. This could be due to a network or server issue 
                please try again later</h3>
                
            </div>
        )
    }
    
}

export default Homepage