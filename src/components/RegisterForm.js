import React, { useState } from 'react'; //useState это хук позволяющий хранить значения
import {useNavigate} from 'react-router-dom'; //useNavigate с помощью которого можно программно перенаправлять пользователя на другую страницу
import {
  formContainer,
  formCard,
  inputField,
  buttonPrimary,
  linkStyle,
  messageStyle,
} from '../styles';

function RegisterForm() {
    const navigate = useNavigate(); // переменная, которая хранит функцию перенаправления.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => { //handleSubmit вызов, когда форму отправили
        e.preventDefault();// чтобы страница не перезагружалась

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage('Введите корректный e-mail');
            return;
        }

        if (password.length < 6) {
            setMessage('Пароль должен содержать минимум 6 символов');
            return;
        }

        if (password !== repeatPassword) {
            setMessage('Пароли не совпадают');
            return;
        }
        setMessage('регистрация успешна!')

        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        setTimeout(() => {
            navigate('/login');
        }, 1500);
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
                placeholder='Введите пароль'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type='password'
                placeholder='Повторите пароль'
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
            />
           
            <button 
                type="submit" 
                style={buttonPrimary}>
                Зарегистрироваться
            </button>
            {message && <p>{message}</p>}
         </form>
        </div>

    );
}

export default RegisterForm;




    

    
// состояния - переменные, которые реакт запоминает и перерисовывает экран, если они меняются

