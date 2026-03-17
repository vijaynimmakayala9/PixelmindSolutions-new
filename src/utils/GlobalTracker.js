// components/GlobalTracker.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackVisitor } from "../utils/trackVisitors";

const GlobalTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackVisitor(location.pathname);
  }, [location.pathname]);

  return null;
};

export default GlobalTracker;