
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from './MainLayout';

const Navbar = () => {
  const {handleLogut} = useContext(authContext)
  return (
    <div>
      <NavLink to="/" style={{marginLeft:"20px"}}>Home</NavLink>
      <NavLink to="/about"style={{marginLeft:"20px"}}>About</NavLink>
      <NavLink to="/signin"style={{marginLeft:"20px"}}>SignIn</NavLink>
      <NavLink to="/profile"style={{marginLeft:"20px"}}>Profile</NavLink>
      <NavLink to="/stats"style={{marginLeft:"20px"}}>Statistics</NavLink>
      <button onClick={handleLogut}>LogOut</button>
    </div>
  );
};

export default Navbar;