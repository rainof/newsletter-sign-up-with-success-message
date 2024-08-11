import React from 'react';
import '../styles/HeroImage.scss';
import heroMobileImage from '../assets/images/illustration-sign-up-mobile.svg';
import heroDesktopImage from '../assets/images/illustration-sign-up-desktop.svg';

function HeroImage() {
    // const isMobile = window.innerWidth < 900;

    return (
        <div className="hero-image-container">
            <picture>
                <source media="(max-width: 899px)" srcset={heroMobileImage}></source>
                <source media="(min-width: 900px)" srcset={heroDesktopImage}></source>
                <img src={heroDesktopImage} alt="Hero" />
            </picture>
        </div>
    );
}

export default HeroImage;