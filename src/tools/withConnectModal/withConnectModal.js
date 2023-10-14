
import React from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export const withConnectModal = (Component) => {
  return (props) => {
    const { open } = useWeb3Modal();

    return (
      <Component
        open={open}
        {...props}
      />
    );
  };
};
