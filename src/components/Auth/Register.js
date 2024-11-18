import React, { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/apiService";
import { toast } from "react-toastify";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleRegister = async () => {
    //validate
    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }

    if (!password) {
      toast.error("Invalid password");
      return;
    }
    //submit data
    let data = await postRegister(email, password, username);
    console.log(">>> check data: ", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleLogin();
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="register-container">
        <div className="header">
          <span>Already have an account?</span>
          <button onClick={() => handleLogin()}>Log in</button>
        </div>
        <div className="title col-4 mx-auto">QUIZ</div>
        <div className="welcome col-4 mx-auto">Ready for new journey?</div>
        <div className="content-form col-4 mx-auto">
          <div className="form-group ">
            <label>Email (*)</label>
            <input
              type={"email"}
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group pass-group">
            <label>Password (*)</label>
            <input
              type={isShowPassword ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {isShowPassword ? (
              <span
                className="icon-eyes"
                onClick={() => setIsShowPassword(false)}
              >
                <IoMdEye />
              </span>
            ) : (
              <span
                className="icon-eyes"
                onClick={() => setIsShowPassword(true)}
              >
                <IoMdEyeOff />{" "}
              </span>
            )}
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type={"text"}
              className="form-control"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <button className="btn-submit" onClick={() => handleRegister()}>
              Register to QUIZ
            </button>
            <div className="text-center">
              <span
                className="back"
                onClick={() => {
                  navigate("/");
                }}
              >
                &#60; &#60; Go to Homepage
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
