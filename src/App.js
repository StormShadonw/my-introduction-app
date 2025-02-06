import React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './Menu';
import {HomePage} from './Pages/HomePage';
import {BlogsPage} from './Pages/BlogsPage';
import {ProfilePage} from './Pages/ProfilePage';
import { BlogPage } from './Pages/BlogPage';




function App() {

  return (
<>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/blog" element={<BlogsPage />}>
            <Route path="/blog/:slug" element={<BlogPage />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<h2>Not found</h2>} />
        </Routes>
      </HashRouter>
</>
  );
}

export default App;
