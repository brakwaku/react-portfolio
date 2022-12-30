import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  document.title = "C9ForLife | Page Not Found";
  return (
    <div className="container">
      <div className="pt-5" style={{ minHeight: 80 + "vh" }}>
        <h1>Page Not Found</h1>
        <p>
          The page you are trying to reach does not exist. Go{" "}
          <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundScreen;
