import React from 'react';
import './App.scss';
import HeroImage from './components/HeroImage.js';
import MainContent from './components/MainContent.js';
import SubscriptionForm from './components/SubscriptionForm.js';
import SuccessPage from './components/SuccessPage.js';

function App({ contentInfo, formInfo, successPageInfo }) {

  const handleSuccess = () => {
    console.log("Subscription successful!");
  }

  return (
    <div className="App">
      <div className="main-container">
        <HeroImage />
        <MainContent contentInfo={contentInfo} />
        <SubscriptionForm formInfo={formInfo} onSuccess={handleSuccess} />
      </div>
      <div>
        <SuccessPage successPageInfo={successPageInfo} />
      </div>
    </div>
  );
}

export default App;
