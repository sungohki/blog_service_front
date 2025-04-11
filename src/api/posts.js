import client from './client';

export const postsWrite = ({ title, body, tags }) => {
  return client.post('/api/posts', { title, body, tags });
};

export const postsReadOne = (id) => {
  return client.get(`/api/posts/${id}`);
};

export const postsReadList = ({ page, username, tag }) => {
  return client.get('/api/posts', { params: { page, username, tag } });
};
