
import { Route, Routes } from 'react-router';
import './App.css';
import { Continent } from './pages/Continent';
import { Countries } from './pages/Countries';
import { Destination } from './pages/Destinations';
import { Details } from './pages/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continent/>}></Route>
        <Route path="/:continentId" element={<Countries/>}></Route>
        <Route path="/:continentId/:countryId" element={<Destination/>}></Route>
        <Route path="/:continentId/:countryId/:destinationId" element={<Details/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
