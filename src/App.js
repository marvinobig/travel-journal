import Nav from './components/Nav';
import { CARD_DATA } from './TravelData';
import './App.css';

export default function App() {
  return (
    <div className="App">
     <Nav />
     {CARD_DATA}
    </div>
  );
}

