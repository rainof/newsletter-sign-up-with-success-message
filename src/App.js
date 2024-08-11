import React, {useState} from 'react';
import './App.scss';
import HeroImage from './components/HeroImage.js';
import MainContent from './components/MainContent.js';
import SubscriptionForm from './components/SubscriptionForm.js';
import SuccessPage from './components/SuccessPage.js';

function App({ contentInfo, formInfo, successPageInfo }) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccess = () => {
    setIsSubmitted(true);
    console.log("Subscription successful!");
  }

  const handleDismiss = () => {
    setIsSubmitted(false);
    setEmail("");
    console.log("Dismiss button clicked, returning to form.");
  }

  return (
    <div className="App">
      {isSubmitted ? (
        <div className="success-container">
          <SuccessPage
            successPageInfo={successPageInfo}
            email={email}
            onDismiss={handleDismiss}
          />
        </div>
      ) : (
        <div className="main-container">
          <HeroImage />
          <MainContent contentInfo={contentInfo} />
          <SubscriptionForm
            formInfo={formInfo}
            onSuccess={handleSuccess}
            email={email}
            setEmail={setEmail}
          />
        </div>
      )}
    </div>
  );
}

export default App;
