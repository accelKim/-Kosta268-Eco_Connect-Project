import React, { useState, useEffect } from "react";

import './FaqList.css'
import FaqNav from "../../components/Nav/FaqNav";
import NoticeCard from "../../components/Card/NoticeCard";

const FaqList = () => {
    const [category, setCategory] = useState('');
 

    
    return (
        <div className="faq-index">
            <div className="main-banner">
                <div className="main-banner-big-text-wrapper">
                    <p className="main-banner-big-text">
                        에코커넥트 고객센터
                    </p>
                </div>
            </div>
            <div className="middle-content-wrap">
                <FaqNav onSelectCategory={setCategory} />
            </div>
            <div className="content-wrap">
                <NoticeCard
                    selectedCategory={category}
                />
            </div>
        </div>
    );
}

export default FaqList;
