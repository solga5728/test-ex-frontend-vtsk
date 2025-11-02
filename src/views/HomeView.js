import React from 'react';
import { Link } from 'react-router-dom';
import {
  formContainer,
  formCard,
  inputField,
  buttonPrimary,
  linkStyle,
  messageStyle,
} from '../styles';

function HomeView() {
  return (
    <div style={formContainer}>
      <div style={formCard}>
        <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
          Добро пожаловать!
        </h1>
        <p style={{ textAlign: 'center', marginBottom: '25px' }}>
          Вы можете зарегистрироваться или войти в аккаунт
        </p>

        {/* Кнопки Войти / Зарегистрироваться */}    
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
          <Link to="/login">
            <button style={buttonPrimary}>
              Войти
            </button>
          </Link>
          <Link to="/register">
            <button style={buttonPrimary}>
              Зарегистрироваться
            </button>
          </Link>
        </div>
      
        {/* Кнопка Аккаунт */}
        <div style={{ textAlign: 'center', marginTop: '5px' }}>
          <Link to="/dashboard">
            <button style={buttonPrimary}>
              Аккаунт
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeView;