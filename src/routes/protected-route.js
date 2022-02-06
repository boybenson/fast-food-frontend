import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  let { userInfo } = useSelector((state) => state.user);
  let location = useLocation();

  if (!userInfo) {
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
