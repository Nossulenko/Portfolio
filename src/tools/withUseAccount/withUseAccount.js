import React, { useEffect } from 'react';

import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi';

export const withUseAccount = (Component) => {
  return (props) => {
    const { ...account } = useAccount();
    const { chain } = useNetwork();
    const { switchNetwork, isLoading } = useSwitchNetwork();

    const isEther = chain && chain.id === 1;

    useEffect(() => {
      if (!isEther && switchNetwork && !isLoading) {
        switchNetwork(1); // Ethereum ID
      }
    }, [isEther]);

    return (
      <Component
        account={{ ...account, isEther }}
        {...props}
      />
    );
  };
};
