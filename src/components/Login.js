const Login = () => {
  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form">
        <label>Email</label>
        <input type="email" required/>
        <label>Пароль</label>
        <input type="password" minLength="8" required/>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;