import React from 'react';
import { Container } from 'react-bootstrap';
import { IoLogoYoutube } from 'react-icons/io';
import '../styles/Home.css'

const TopBanner = () => {
    return (
        <div className='topBanner'>
            <Container className='banner'>
                <div className='banner-heading'>
                    <h1 className='banner-heading-style'>We Make Unique Trips All Over Europe and Asia.</h1>
                </div>
                <div className='banner-paragraph'>
                    <p className='banner-paragraph-style'><IoLogoYoutube className='banner-paragraph-icon' /> #_CURIOSITY</p>
                </div>
                <button className='banner-btn-1'>Make a Trip</button>
                <button className='banner-btn-2'>Pricing</button>
                <div className='banner-dummy'></div>
            </Container>
        </div>
    )
}

export default TopBanner;