import './FundingNav.css'
import React , {useState} from "react";
import Nav from 'react-bootstrap/Nav';


const FaqNav = ({ onSelectCategory }) => {
    //사용법 FaqTest 참조
    return(
        <>
        <Nav variant="phills" defaultActiveKey="#" className="nav-wrap">
           <Nav.Item className="nav-box" >
             <Nav.Link href="#" className="nav-text" onClick={() => onSelectCategory('')}>전체</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-2" href="#"className="nav-text" onClick={() => onSelectCategory(1)}>계정관리</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-4" href="#"className="nav-text" onClick={() => onSelectCategory(2)}>결제환불</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-6" href="#"className="nav-text" onClick={() => onSelectCategory(3)}>이용관련</Nav.Link>
           </Nav.Item>
         </Nav>
       </>
    );
} 

export default FaqNav;