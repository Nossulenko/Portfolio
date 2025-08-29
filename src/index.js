import { createRoot } from 'react-dom/client';
import React from 'react';
import { Main } from './main.js';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<Main />);
