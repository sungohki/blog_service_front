import client from './client';

export const postsWrite = ({ title, body, tags }) => {
  return client.post('/api/posts', { title, body, tags });
};
