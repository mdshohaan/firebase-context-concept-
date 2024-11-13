import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "./MainLayout";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  console.log(children);
  const { user ,loading} = useContext(authContext);
  if(loading){
    return <h1>Loading......</h1>
  }
  console.log(user);
  if (!user) {
    return <Navigate to="/signin"></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivateRoutes;
