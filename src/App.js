import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import Corporate from './corporate';
import Music from './music';
import NotFoundScreen from './NotFoundScreen';
import InternalErrorScreen from './InternalErrorScreen';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} exact />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/music" element={<Music />} />
          <Route path="/internal-error" element={<InternalErrorScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
    </Router>
  );
}

export default App;
