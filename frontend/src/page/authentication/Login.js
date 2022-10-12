import "./authenticate.scss";
import React from "react";
import LoginForm from "../../components/authentication/LoginForm";

function Login() {
  return (
    <div className="login__page">
    <div className="title">
      <span>Đăng nhập</span>
    </div>
      <LoginForm />
    </div>
  );
}

export default Login;
