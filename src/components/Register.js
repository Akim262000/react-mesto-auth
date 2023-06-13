import FormWithAuthorization from "./UI/FormWithAuthorization";

const Register = () => {
  return (
    <>
      <FormWithAuthorization title="Регистрация" buttonName="Зарегистрироваться" />
      <p className="auth__login-hint">Уже зарегистрированы? Войти</p>
    </>
  );
};

export default Register;
