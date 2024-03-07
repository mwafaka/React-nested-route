import { useNavigate } from "react-router-dom";

const MyClients = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>MyClients Sara</h1>
      <button onClick={() => navigate("/contact")}>Go To Contact</button>
    </div>
  );
};

export default MyClients;
