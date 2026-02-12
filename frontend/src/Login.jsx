import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        email,
        password
      });

      const { token, email: userEmail } = response.data;

      localStorage.setItem("jwtToken", token);
      localStorage.setItem("userEmail", userEmail);
      console.log(token)

      // onLogin(token, userEmail);
      navigate("/tasks");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="authContainer">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div className="signup" style={{display:"flex",justifyContent:"center"}}>
      <p>Don't have an account?</p>
      <p onClick={() => navigate("/signup")} style={{color:"blue",cursor:"pointer"}}> Signup</p>
      </div>
      
    </div>
  );
}

export default Login;
