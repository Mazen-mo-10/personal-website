import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RouteMemory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const lastPath = localStorage.getItem("lastPath");
    if (lastPath && lastPath !== location.pathname) {
      navigate(lastPath);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lastPath", location.pathname);
  }, [location]);

  return null;
};

export default RouteMemory;
