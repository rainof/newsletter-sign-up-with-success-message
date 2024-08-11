import React from 'react';
import "../styles/SuccessPage.scss";
import successImage from '../assets/images/icon-success.svg';

function SuccessPage({successPageInfo}) {
    return (
        <div className="success-page-container">
            <img
                className="success-img"
                src={successImage}
                alt="success"
            />
            <h1 className="success-title">{successPageInfo.title}</h1>
            <p className="success-description" dangerouslySetInnerHTML={{ __html: successPageInfo.description }} />
            <button type="button" name="dismiss" id="dismiss-button">{successPageInfo.buttonName}</button>
        </div>
    )
}

export default SuccessPage;