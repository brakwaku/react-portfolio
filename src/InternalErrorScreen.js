import { NavLink, useLocation } from 'react-router-dom';

const InternalErrorScreen = () => {
    document.title = "BraKwaku Jr | Internal Error";

  const location = useLocation();
  const redirect = location.state ? location.state : '/';
    return (
        <div className='container'>
            <h1>Sorry, an error occured and we are working to get it resolved. Please come back later</h1>
            <h4>Thank you!</h4>
            <h6>
                <NavLink to={redirect}>Return to previous page</NavLink>
            </h6>
        </div>
    )
}

export default InternalErrorScreen
