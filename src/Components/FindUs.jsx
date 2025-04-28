import React from 'react';
import fb from '../assets/fb.png'
import twitterLogo from '../assets/twitter.png'
import igLogo from '../assets/instagram.png'

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Find Us On</h2>

            <div className="join join-vertical flex *:w-full">
                <button className="btn  join-item justify-start"><img src={fb} alt="Facebook" /> Facebook </button>
                <button className="btn join-item justify-start"><img src={igLogo} alt="Instagram" /> Instagram </button>
                <button className="btn join-item justify-start"><img src={twitterLogo} alt="Twitter" /> Twitter </button>
                
            </div>

        </div>
    );
};

export default FindUs;