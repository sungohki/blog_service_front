import client from './client';

export const postsWrite = ({ title, body, tags }) => {
  return client.post('/api/posts', { title, body, tags });
};

export const postsRead = (id) => {
  return client.get(`/api/posts/${id}`);
};
