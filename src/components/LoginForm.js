import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  formContainer,
  formCard,
  buttonPrimary,
  } from '../styles';

function LoginForm({ setIsAuth }) {
    const navigate = useNavigate(); // переменная, которая хранит функцию перенаправления.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => { //handleSubmit вызов, когда форму отправили
        e.preventDefault();

        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (email === storedEmail && password === storedPassword) {
            setMessage('Добро пожаловать');
            localStorage.setItem('isAuth', 'true');
            setTimeout(() => navigate('/dashboard'), 1500);
            setIsAuth(true);
        } else {
            setMessage('Невереный email или пароль')
        }
};

return (
    <div style={formContainer}>
        <form onSubmit={handleSubmit} style={formCard}> 
            <h2 style={{ textAlign: 'center' }}>Вход</h2>
        
                <input
                    type='email'
                    placeholder='Введите email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type='password'
                    placeholder='Введите password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                  
                <button type="submit" style={buttonPrimary}>
                    Войти
                </button>
            {message && <p>{message}</p>}
         </form>
        </div>

    );
}

export default LoginForm;