import React from 'react';
import './Banner.css'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
import './Banner.css'

const Banner = () => {
    return (

        <div className="hero bannerImg">

            <div className='bannerDescription'>
                <h1 className="text-5xl font-bold">Providing
                    Best Health Solution!</h1>
                <p className="py-6">The most valuable thing is your health.We always try to our best. Our team of highly dedicated professionals works in an environment that enables them to deliver the highest quality of healthcare services.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>

        </div>
    );
};

export default Banner;