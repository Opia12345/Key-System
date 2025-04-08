import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const redirect = () => {
      navigate("/");
    };
    setTimeout(redirect, 3000);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#030517] text-white text-center p-6">
      <h1 className="text-9xl font-bold mb-6 text-blue-600">404</h1>
      <p className="text-2xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <small className="text-lg text-blue-500 hover:text-blue-700 font-semibold transition duration-300">
        Redirecting...
      </small>
    </div>
  );
};

export default NotFound;
