import { NavLink, useLocation } from "react-router-dom";

const NotFoundScreen = () => {
  document.title = "BraKwaku Jr | Page Not Found";

  const location = useLocation();
  const redirect = location.state ? location.state : '/';
  return (
    <div className="container">
      <div className="pt-5" style={{ minHeight: 80 + "vh" }}>
        <h1>Page Not Found</h1>
        <p>
          The page you are trying to reach does not exist. Go{" "}
          <NavLink to={redirect}>Return to previous page</NavLink>
        </p>
      </div>
    </div>
  );
};

export default NotFoundScreen;
