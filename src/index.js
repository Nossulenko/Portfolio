import { createRoot } from 'react-dom/client';
import React from 'react';
import { Main } from './main.js';
import './pages/styles/global.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<Main />);
