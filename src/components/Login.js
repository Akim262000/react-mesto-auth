const Login = () => {
  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Пароль" minLength="8" required />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
