import { NavLink } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    <div>
      <NavLink to="/corporate">
        <div className="music-container">Corporate</div>
      </NavLink>
      <NavLink to="/music">
        <div className="music-container">Music</div>
      </NavLink>
    </div>
  );
};

export default WelcomeScreen;
