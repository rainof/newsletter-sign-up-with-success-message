import React from 'react';
import '../styles/SubscriptionForm.scss';

function SubscriptionForm({formInfo}) {
    return (
        <div className="form-container">
            <p className="form-title">{formInfo.title}</p>
            <input type="email" id="email" name="email" placeholder={formInfo.initial} required/>
            <button id="submit-button">{formInfo.buttonName}</button>
        </div>
    )
}

export default SubscriptionForm;