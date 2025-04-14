import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PostListPage } from './pages/post/PostListPage';
import { AuthLoginPage } from './pages/auth/AuthLoginPage';
import { AuthRegisterPage } from './pages/auth/AuthRegisterPage';
import { PostWritePage } from './pages/post/PostWritePage';
import { PostDetailPage } from './pages/post/PostDetailPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>My Little Blog</title>
      </Helmet>

      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/register" element={<AuthRegisterPage />} />
        <Route path="/write" element={<PostWritePage />} />
        <Route path="/:username">
          <Route index element={<PostListPage />} />
          <Route path=":postId" element={<PostDetailPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
