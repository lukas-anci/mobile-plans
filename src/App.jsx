import './App.css';
import Commitment from './components/commitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobilePlan';

function App() {
  return (
    <div className="App">
      <h1>mobile app</h1>
      <Commitment />
      <HaveServices />
      <MobilePlan />
    </div>
  );
}

export default App;
