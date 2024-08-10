import React, { useState } from 'react';
import '../styles/SubscriptionForm.scss';

function SubscriptionForm({formInfo}) {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailPattern.test(email)) {
        setMessage(`Thanks for subscribing! A confirmation email has been sent to ${email}.`);
        } else {
        setMessage('Please enter a valid email address.');
        }
    };


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <p className="form-title">{formInfo.title}</p>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={formInfo.initial}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" id="submit-button">
                    {formInfo.buttonName}
                </button>
            </form>
        </div>
    );
}

export default SubscriptionForm;