import theme from './settings/theme.js';
import Template from './layouts/Template/index.js';
import { ThemeProvider } from 'react-jss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/index.js';
import About from './pages/about.js';
import Skills from './pages/skills.js';
import Recommendations from './pages/recommendations.js';
import NotFound from './pages/404.js';
import { initializeAnalytics } from './tools/analytics.js';

export const Main = () => {
  // Initialize Google Analytics
  React.useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Template location={location} />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/recommendations' element={<Recommendations />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};
