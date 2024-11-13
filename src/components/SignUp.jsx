import { useContext } from "react";
import { authContext } from "./MainLayout";

const SignUp = () => {
  const { handleSignUp } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;
    console.log(email, password, conPassword);
    if (password.length < 6) {
      return alert("password must 6");
    }
    if (password != conPassword) {
      return alert("pass not match");
    }

    handleSignUp(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        Email : <input type="text" name="email" placeholder="Email" /> <br />
        Password :{" "}
        <input type="password" name="password" placeholder="Password" /> <br />
        Confirm Password :{" "}
        <input type="password" name="conPassword" placeholder="Password" />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
