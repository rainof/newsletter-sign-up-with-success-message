import React from 'react';
import "../styles/SuccessPage.scss";
import successImage from '../assets/images/icon-success.svg';

function SuccessPage({ successPageInfo, email, onDismiss }) {
    return (
        <div className="success-page-container">
            <img
                className="success-img"
                src={successImage}
                alt="success"
            />
            <h1 className="success-title">{successPageInfo.title}</h1>
            <div>
                <span className="success-description-start">{successPageInfo.description_1}</span>
                <span className="success-description-email"><strong>{email}</strong></span>
                <span className="success-description-end">{successPageInfo.description_2}</span>
            </div>
            <button
                type="button"
                name="dismiss"
                id="dismiss-button"
                onClick={onDismiss}
            >
                {successPageInfo.buttonName}
            </button>
        </div>
    )
}

export default SuccessPage;