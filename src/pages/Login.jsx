import React, {useContext} from 'react';
import Button from '../components/UI/button/Button';
import Input from '../components/UI/input/Input';
import {AuthContext} from '../context';

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };
  return (
    <div>
      <h2>Страница для логина</h2>
      <form onSubmit={login}>
        <Input type="text" placeholder="Введите логин" />
        <Input type="password" placeholder="Введите пароль" />
        <Button>Войти</Button>
      </form>
    </div>
  );
};

export default Login;
