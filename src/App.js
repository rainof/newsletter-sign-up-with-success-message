import './App.scss';
import HeroImage from './design/mobile-design.jpg'
import MainContent from './components/MainContent.js'
import SubscriptionForm from './components/SubscriptionForm.js'

function App({ contentInfo, formInfo, successPageInfo }) {
  return (
    <div className="App">
      <HeroImage value={contentInfo} />
      <MainContent value={formInfo} />
      <SubscriptionForm value={successPageInfo} />
    </div>
  );
}

export default App;
