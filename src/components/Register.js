import { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Пароль" minLength="8" required />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
      <p className="auth__login-hint">Уже зарегистрированы? Войти</p>
    </>
  );
};

export default Register;
