import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Login.module.css";

const Login = ({ onLogin = () => {} }) => {
  const [isConnecting, setIsConnecting] = useState(false);

  //Detect Provider
  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      window.alert("No Ethereum browser available, Check your MetaMask");
    }
    return provider;
  };

  const onLoginHandler = async () => {
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.log(
          "Not window.ethereum, do you have multiple wallets installed"
        );
      }
      setIsConnecting(true);
      await provider.request({
        method: "eth_requestAccounts",
      });
      setIsConnecting(false);
      onLogin(provider);
    }
  };
  return (
    <Card className={classes.login}>
      <button className={classes.button} onClick={onLoginHandler} type="button">
        {!isConnecting ? "Connect" : "Loading..."}
      </button>
    </Card>
  );
};

export default Login;
