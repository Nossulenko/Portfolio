import theme from './settings/theme.js';
import Template from './layouts/Template/index.js';
import { ThemeProvider } from 'react-jss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/index.js';
import About from './pages/about.js';
import Skills from './pages/skills.js';
import Recommendations from './pages/recommendations.js';
import UnderConstruction from './pages/under-construction.js';
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
            <Route path='/' element={<UnderConstruction />} />
            <Route path='/about' element={<UnderConstruction />} />
            <Route path='/skills' element={<UnderConstruction />} />
            <Route path='/recommendations' element={<UnderConstruction />} />
            <Route path='/under-construction' element={<UnderConstruction />} />
            <Route path='*' element={<UnderConstruction />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};
