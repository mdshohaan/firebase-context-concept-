import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "./MainLayout";

const SignIn = () => {
  const { handleSignIn } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    if (password.length < 6) {
      return alert("password must 6");
    }

    handleSignIn(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        Email : <input type="text" name="email" placeholder="Email" /> <br />
        Password :{" "}
        <input type="password" name="password" placeholder="Password" /> <br />
        <button type="submit">Submit</button>
      </form>
      <NavLink to="/signup">SignUp</NavLink>
    </div>
  );
};

export default SignIn;
