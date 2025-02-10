import React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './Menu';
import {HomePage} from './Pages/HomePage';
import {BlogsPage} from './Pages/BlogsPage';
import {ProfilePage} from './Pages/ProfilePage';
import { BlogPage } from './Pages/BlogPage';
import { LoginPage } from './Pages/LoginPage';
import { LogoutPage } from './Pages/LogoutPage';
import { AuthProvider, AuthRoute } from './hooks/customHooks/auth.js';
import { PrimeReactProvider } from 'primereact/api';
import { BlogsProvider } from './BlogsData.js';




function App() {

  return (
<PrimeReactProvider>
      <HashRouter>
        <BlogsProvider>
          <AuthProvider>
            <Menu />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/blog" element={<BlogsPage />}>
                <Route path="/blog/:slug" element={<BlogPage />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
                
                } />
              <Route path="/profile" element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
                } />
              <Route path="*" element={<h2>Not found</h2>} />
            </Routes>
          </AuthProvider>
        </BlogsProvider>


      </HashRouter>
</PrimeReactProvider>
  );
}

export default App;
