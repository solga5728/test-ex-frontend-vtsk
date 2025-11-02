import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import {
  formContainer,
  formCard,
  inputField,
  buttonPrimary,
  linkStyle,
  messageStyle,
} from '../styles';

function RegisterView() {
  return (
    <div style = {{textAlign: 'center', marginTop: '50px'}}>
      <h1>Регистрация</h1>
      <p>Введите e-mail и пароль</p>

      <RegisterForm />

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

export default RegisterView;