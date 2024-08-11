import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const contentInfo = {
  title: "Stay updated!",
  description: "Join 60,000+ product managers receiving monthly updates on:",
  points: [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!"
  ],
};

const formInfo = {
  title: "Email address",
  initial: "email@company.com",
  buttonName: "Subscribe to monthly newsletter"
};

const successPageInfo = {
  title: "Thanks for subscribing!",
  description_1: "A confirmation email has been sent to ",
  description_2: ". Please open it and click the button inside to confirm your subscription.",
  buttonName: "Dismiss message"
};

root.render(
  <React.StrictMode>
    <App contentInfo={contentInfo} formInfo={formInfo} successPageInfo={successPageInfo} />
  </React.StrictMode>
);

reportWebVitals();
