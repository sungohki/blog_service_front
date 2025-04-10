import client from './client';

export const authLogin = async ({ username, password }) => {
  return client.post('/api/auth/login', {
    username,
    password,
  });
};

export const authRegister = async ({ username, password }) => {
  return client.post('/api/auth/register', {
    username,
    password,
  });
};

export const authCheck = async () => {
  return client.get('/api/auth/check');
};

export const authLogout = async () => {
  return client.post('/api/auth/logout');
};
