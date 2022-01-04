import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  
  const count = simplified ? 10 : 100;
  const { data } = useGetCryptosQuery(count);
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  

  var { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  //localStorage.setItem("cryptoNews", JSON.stringify(cryptoNews));
  /*
    Due to limited API calls I will be pulling data from localstorage for developmental purposes. 
  */
 /*
  var cryptoNews;
  if (localStorage.getItem('cryptoNews')) {
    cryptoNews = JSON.parse(localStorage.getItem('cryptoNews'));
    if (cryptoNews) {
       console.log("cryptonews:"+JSON.stringify(cryptoNews));
        } else {
           console.log("error getting data");
                      }
        } else {
            console.log("No local storage for cryptoNews");
        }
        */
  if (!cryptoNews?.value) return 'Loading...';

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news,i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
        <Card hoverable className="news-card">
          <div className="news-image-container">
            <a href={news.url} target="_blank" rel="noreferrer">
              <Title className="news-title" level={4}>{news.name}</Title>
              <img src={news?.image?.thumbnail?.contentUrl || demoImage} />
            </a>
          </div>
          <p>
            {news.description > 100
              ? `${news.description.substring(0,100)}...`
              : news.description}
          </p>
          
          <div className="provider-container">
            <div>
              <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
              <Text className = "provider-name">{news.provider[0]?.name}</Text>
            </div>
            <Text>{moment(news.datePublished).startOf('ss').fromNow()} </Text>
          </div>

        </Card>
      </Col>
      ))}
      
    </Row>
  );
};

export default News;
