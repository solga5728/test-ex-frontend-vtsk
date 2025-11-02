import React from 'react';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  formContainer,
  formCard,
  inputField,
  buttonPrimary,
  linkStyle,
  messageStyle,
} from '../styles';

function DashboardView({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    setIsAuth(false);
    navigate('/login')
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>Добро пожаловать в личный кабинет!</h1>
      <p>Здесь может быть ваша персональная информация</p>
        <button onClick={handleLogout} style={buttonPrimary}>
          Выйти
        </button>
     
    </div>
  );
}

export default DashboardView;
