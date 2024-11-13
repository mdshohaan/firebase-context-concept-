import { useContext } from "react";
import { authContext } from "./MainLayout";

const About = () => {
  const { user, setUser } = useContext(authContext);
  return <div>{user?.displayName}</div>;
};

export default About;
