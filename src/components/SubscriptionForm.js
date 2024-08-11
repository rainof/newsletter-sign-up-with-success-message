import React, { useState } from "react";
import "../styles/SubscriptionForm.scss";

function SubscriptionForm({formInfo, onSuccess}) {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateEmail(email)) {
            setError("");
            onSuccess();
        } else {
            setError("Valid email required");
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-header">
                    <p className="form-title">{formInfo.title}</p>
                    {
                        error &&
                        <div className="error-message">{error}</div>
                    }
                </div>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder={formInfo.initial}
                    onChange={(e) => setEmail(e.target.value)}
                    className={error ? "input-error" : ""}
                    required
                />
                <button type="submit" id="submit-button">
                    {formInfo.buttonName}
                </button>
            </form>
        </div>
    );
}

export default SubscriptionForm;