import React, { useState } from 'react';
import { ethers } from 'ethers';

const Transaction = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, serUserBalance] = useState(null);

  connectWallet = () => {

    if (window.ethereum) {

      window.ethereum.request({method: 'eth_requestAccounts'})
      .then(result => {
        accountChanged([result[0]])
      })
    }else{

      setErrorMessage('Install MetaMask Please!!')
    }

  };

  const accountChanged = (accountName) => {

    setDefaultAccount(accountName)
    getUserBalance(accountName)

  };

  const getUserBalance = (accountAddress) => {

    window.ethereum.request({method: 'eth_getBalance', params: [String(accountAddress), "latest"]})
  }

  async function sendTransaction() {

    let params = [{
      from: {accountAddress},
      to: "0xaC11f446244e86945dDbC6192A698B092A05909b",
      gas: Number(21000).String(16),
      gasPrice: Number(2500000).String(16),
      value: Number(10000000000000000).String(16),
    }]

    let res = await window.ethereum.request({method: "eth_sendTransaction", params}).catch((err)  => {

      console.log(err)
    })
  }

  return (

    <div>

      <center>
        <h1>Metamask Wallet Connection</h1>
        <button onClick={connectWallet}>Connect Wallet</button>
        <h3>Address: {defaultAccount}</h3>
        <h3>Address: {userBalance}</h3>


        <form onSubmit={sendTransaction}>
        <input type="submit" value="Submit" />

        </form>


        {errorMessage}
      </center>

    </div>
  );
};

export default Transaction;
