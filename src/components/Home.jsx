
import { useContext } from "react";
import { authContext } from "./MainLayout";

const Home = () => {
  const {handleGoogle,handleLogut} = useContext(authContext)



  return (
    <div>
      <button onClick={handleGoogle}>Google Login</button>
      <button onClick={handleLogut}>Logout</button>
     
    </div>
  );
};

export default Home;
