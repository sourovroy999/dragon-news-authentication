import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router';
const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-base-200 p-2'> 
            <p className='bg-[#D72050]  text-base-100 px-3 py-1 '>latest</p>
            <Marquee pauseOnHover speed={60} className='space-x-10'>
                <Link to='/news'>
           Bangladesh has signed two financing agreements with the World Bank totaling $850 million to boost trade capacity, job creation, and social protection programs.
            </Link>
                <Link to='/news'>
           Bangladesh has signed two financing agreements with the World Bank totaling $850 million to boost trade capacity, job creation, and social protection programs.
            </Link>
                <Link to='/news'>
           Bangladesh has signed two financing agreements with the World Bank totaling $850 million to boost trade capacity, job creation, and social protection programs.
            </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;