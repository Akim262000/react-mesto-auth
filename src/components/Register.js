import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as auth from "../utils/auth";


const Register = () => {
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
    const {email, password} = formValue;
    e.preventDefault();
    // const { email, password } = formValue;
    // auth.register(email, password).then((res) => {
    //   if (res.ok) {
    //     navigate('/sign-in');
    //   }
    // });
    auth.register(email, password).then((data) => {
      navigate('/sign-in');
    })
  };

  return (
    <>
      <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input type="email" id="email" name="email" placeholder="Email" value={formValue.email || ''} onChange={handleChange} />
        <input type="password" id="password" name="password" placeholder="Пароль" minLength="8" value={formValue.password || ''} onChange={handleChange} />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
      <Link to="/sign-in" className="auth__login-hint">Уже зарегистрированы? Войти</Link>
    </>
  );
};

export default Register;
