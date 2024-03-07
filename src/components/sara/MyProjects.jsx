import { Navigate } from "react-router-dom";

const MyProjects = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>MyProjects Sara</h1>
    </div>
  );
};

export default MyProjects;
