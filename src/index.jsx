import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'modules';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { checkThunk, tempSetUser } from 'modules/user';
import { HelmetProvider } from 'react-helmet-async';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
const root = ReactDOM.createRoot(document.getElementById('root'));

// localStorage에 저장된 user가 있다면, user를 store에 저장하고 checkThunk() 실행
try {
  const user = localStorage.getItem('user');
  if (user) {
    store.dispatch(tempSetUser(JSON.parse(user)));
    // user 정보 확인
    store.dispatch(checkThunk()).then((result) => {
      // 해당 user 정보 만료 혹은 오류 발생 시 로그인 페이지로 이동
      if (result && result.error) {
        localStorage.removeItem('user');
        alert('로그인 정보가 만료되었습니다. 다시 로그인 해주세요.');
        window.location.href = '/login';
        console.log('info: user check failed');
      }
    });
  }
} catch (error) {
  console.error('localStorage is not working', error);
}

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>
);
