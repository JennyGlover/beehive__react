import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthenticationContext } from "../contexts/AppContexts";

function ProtectedRoute({ children, anonymous = false }) {
  const { isNavVisible, setIsNavVisible } = useContext(AuthenticationContext);

  if (anonymous) {
    setIsNavVisible(false);
  }
  return children;
}

export default ProtectedRoute;
