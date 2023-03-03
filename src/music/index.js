import { Outlet } from 'react-router-dom';
import Header from './components/Header';
// import './bootstrap.min.css';

const index = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Outlet />
      </div>
    </div>
  );
};

export default index;
