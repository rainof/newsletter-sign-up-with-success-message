import './App.scss';
import HeroImage from './components/HeroImage.js';
import MainContent from './components/MainContent.js';
import SubscriptionForm from './components/SubscriptionForm.js';
import SuccessPage from './components/SuccessPage.js';

function App({ contentInfo, formInfo, successPageInfo }) {
  return (
    <div className="App">
      <HeroImage />
      <MainContent contentInfo={contentInfo} />
      <SubscriptionForm formInfo={formInfo} />
      <SuccessPage successPageInfo={successPageInfo} />
    </div>
  );
}

export default App;
