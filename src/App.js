import './App.css';
import HeroImage from 'src/components/HeroImage.js'
import MainContent from 'src/components/MainContent.js'
import SubscriptionForm from 'src/components/SubscriptionForm.js'

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
