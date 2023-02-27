import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import Corporate from './corporate';
import Music from './music';
import NotFoundScreen from './NotFoundScreen';
import InternalErrorScreen from './InternalErrorScreen';
import Songs from './music/screens/SongsScreen';
import ConcertsScreen from './music/screens/ConcertsScreen';
import MerchScreen from './music/screens/MerchScreen';
import FeatArtistsScreen from './music/screens/FeatArtistsScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomeScreen />} exact />
        <Route path='/corporate' element={<Corporate />} />
        <Route path='/music' element={<Music />}>
          <Route path='songs' element={<Songs />} />
          <Route path='concerts' element={<ConcertsScreen />} />
          <Route path='merch' element={<MerchScreen />} />
          <Route path='feat-artists' element={<FeatArtistsScreen />} />
        </Route>
        <Route path='/internal-error' element={<InternalErrorScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
