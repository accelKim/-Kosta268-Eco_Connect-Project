import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Link } from "react-router-dom";
import AuthAxios from '../../utils/axios/AuthAxios';
import './NoticeCard.css';


const NoticeCard = ({ selectedCategory , data}) => {
  // const [missions, setMissions] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let url = 'http://localhost:3001/mission';
  
  //       // 카테고리 값이 있는 경우, 해당 카테고리에 대한 데이터를 가져옴
  //       if (category !== undefined) {
  //         url += `?category=${category}`;
  //       }
  
  //       const response = await axios.get(url);
  //       const fetchedMissions = response.data;
  
  //       // 최대 8개의 미션만 가져오도록 수정
  //       const limitedMissions = fetchedMissions.slice(0, 8);
  
  //       setMissions(limitedMissions);
  //     } catch (error) {
  //       console.error('미션 데이터를 불러오는 중 오류 발생:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, [category]);
  const [lists, setLists] = useState([]);
  const [filteredLists, setFilteredLists] = useState([]);





  
  const fetchMission = () => {
      AuthAxios.get(`/api/faq`)
          .then((response) => {
              console.log(response);
              setLists(response.data);
          })
  }

  useEffect(() => {
      fetchMission();
  }, [selectedCategory])
  
  useEffect(() => {
    // selectedCategory가 변경될 때마다 fundings를 필터링하여 filteredFundings에 저장
    if (selectedCategory) {
      // 만약 selectedCategory가 정의되어 있다면, 해당 카테고리를 기반으로 fundings 필터링
      setFilteredLists(lists.filter(faq => faq.category === selectedCategory));
    } else {
      // 만약 selectedCategory가 정의되지 않았다면, missions 배열에서 상위 10개 항목을 가져오기
      setFilteredLists(lists);
    }
  }, [selectedCategory, lists]);

  const calculateMdValue = () => {
    const numItems = filteredLists.length;
    if (numItems >= 4) {
      return 4;
    } else {
      return numItems;
    }
  };

  return (
     <div className='Notice_faq_index'>
    <Row xs={1} md={calculateMdValue()} className="g-4" style={{maxWidth:'1100px'}}>
      {filteredLists.map((item, index) => (
         <Col key={index}>
        <Card style={{ borderRadius:'15px',height:'10rem'}}>
      <Card.Body>
        <div className='Q'>Q</div>
        <div className='mission-info-wrap'>
        <Card.Title className='mission-name-text'>{item ? item.title : "Loading..."} </Card.Title>
        </div>
        <div className='tag'># ㅤ에코커넥트</div>
      </Card.Body>
    </Card>
    </Col>
      ))}
    </Row>
    </div>
  );
};

export default NoticeCard;