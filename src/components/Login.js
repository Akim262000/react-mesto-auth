import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as auth from "../utils/auth";

const Login = ({handleLogin}) => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    auth.authorize(formValue.email, formValue.password).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input type="email" id="email" name="email" placeholder="Email" value={formValue.email} onChange={handleChange} required />
        <input type="password" id="password" name="password" placeholder="Пароль" minLength="8" value={formValue.password} onChange={handleChange} required />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
