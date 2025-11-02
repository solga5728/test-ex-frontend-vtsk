import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import {
  formContainer,
  formCard,
  inputField,
  buttonPrimary,
  linkStyle,
  messageStyle,
} from '../styles';


function LoginView({ setIsAuth }) {
  return (
    <div style = {inputField}>
      <h1>Вход в аккаунт</h1>
      <p>Введите e-mail и пароль</p>

      <LoginForm setIsAuth={setIsAuth} />

      <div>
        <Link to="/">
          <button type="submit" style={buttonPrimary}>
            Назад
          </button>
        </Link>
      </div>

    </div>
  );
}

export default LoginView;