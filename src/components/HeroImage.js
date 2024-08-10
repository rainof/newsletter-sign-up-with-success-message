import React from 'react';
import '../styles/HeroImage.scss';
import heroMobileImage from '../assets/images/illustration-sign-up-mobile.svg';
import heroDesktopImage from '../assets/images/illustration-sign-up-desktop.svg';

function HeroImage() {

    const isMobile = window.innerWidth < 768;

    return (
        <div className="hero-image-container">
            <img id="background-image" src={ isMobile ? heroMobileImage : heroDesktopImage} alt="Hero" />
        </div>
    );
}

export default HeroImage;