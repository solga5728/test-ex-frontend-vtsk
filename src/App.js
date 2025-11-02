import React, { useState, useEffect } from 'react'; // подключить реакт
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // подключить юиюлиотеку для маршрутов

//испорт трех страниц, это компоненты
import HomeView from './views/HomeView' 
import LoginView from './views/LoginView' 
import RegisterView from './views/RegisterView' 
import DashboardView from './views/DashboardView' 

// Подключаем стили приложения
import './App.css';

//это компонет App, определяет маршруты и показывает нужную страницу
function App() { // функция
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') === 'true') // проверяем авторизацию
  
  useEffect(() => {
    const checkAuth = () => {
      setIsAuth(localStorage.getItem('isAuth') === 'true');
    };

    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return (
    <BrowserRouter>
    <div className = 'App'> 
      <Routes>
        <Route path='/' element={<HomeView />} />

        <Route 
          path='/login' 
          element={isAuth ? <Navigate to="/dashboard" /> : <LoginView setIsAuth={setIsAuth} /> } 
          />

        <Route path='/register' element={<RegisterView />} />
        
        {/* если не авторизован, то релирект на логин*/}
        <Route 
        path='/dashboard' 
        element={isAuth ? <DashboardView setIsAuth={setIsAuth} />: <Navigate to='/login' />
          } 
        />

        {/* перенаправление на главную, если путь не найден */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
// div контейнер на странице в котором хранится содержимое
//className='App' — это CSS-класс, чтобы можно было оформить этот блок через стили (в App.css)

export default App // экспорт компонент, чтобы он перешел в индекс.жс и запустить сайт
