import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

const Login = ({ HandleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const submitBtn = () => {
    HandleLogin(email, password);
  };

  return (
    <div className="Container">
      <div className="LoginContainer">
        <h1>USER LOGIN</h1>
        <div className="LoginSection">
          <div className="form__group field">
            <input
              type="email"
              className="form__field"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form__label">Email</label>
          </div>
          <div className="form__group field">
            <input
              type={isPasswordHidden ? "password" : "text"}
              className="form__field"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="form__label">Password</label>
            {isPasswordHidden ? (
              <FaEyeSlash
                className="passEye"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEye className="passEye" onClick={togglePasswordVisibility} />
            )}
          </div>
          <div className="buttonSection">
            <button className="btn" onClick={submitBtn}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
