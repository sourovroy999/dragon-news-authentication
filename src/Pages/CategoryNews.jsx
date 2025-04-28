import React from 'react';
import { useLoaderData } from 'react-router';
import NewsCard from '../Components/Layout-component/NewsCard';

const CategoryNews = () => {
    const {data: news}=useLoaderData()
    console.log(news);
    
    return (
        <div>
            <h2>{news.length} category found in this category</h2>
            <div>
                {
                    news.map((singleNews)=>(
                       <NewsCard news={singleNews} key={singleNews._id}></NewsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;