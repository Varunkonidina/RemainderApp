import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/user/register", { email, password });
      navigate("/login");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="authContainer">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Signup</button>
      </form>
      <div className="signup" style={{display:"flex",justifyContent:"center"}}>
      <p> Have an account?</p>
      <p onClick={() => navigate("/login")} style={{color:"blue",cursor:"pointer"}}> Login</p>
      </div>
    </div>
  );
}

export default Signup;
