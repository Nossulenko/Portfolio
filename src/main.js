import theme from './settings/theme.js';
import Template from './layouts/Template/index.js';
import { ThemeProvider } from 'react-jss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/index.js';
import About from './pages/about.js';
import Skills from './pages/skills.js';
import Portfolio from './pages/portfolio.js';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';


const projectId = import.meta.env.VITE_WALLET_CONNECT_ID;

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });
export const Main = () => {
  return (

    <WagmiConfig config={wagmiConfig}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>

            <Route element={<Template location={location} />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<About />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/portfolio' element={<Portfolio />} />

            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </WagmiConfig>
  );
};
