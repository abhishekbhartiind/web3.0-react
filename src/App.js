import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Web3 from "web3";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const onLogin = async (provider) => {
    try {
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        console.log("Please connect to MetaMask");
      }
      setIsConnected(true);
    } catch (err) {
      console.log(err);
    }
  };

  const onLogout = () => {
    setIsConnected(false);
  };

  return (
    <div>
      <header className="main-header">
        <h1>Zen &amp; Web3</h1>
        <nav className="nav">
          <ul>
            <li>Wallet:</li>
            <li>0x145420D3a0d2D410A690E47fe26F19B76e20E272</li>
          </ul>
        </nav>
      </header>
      <main>
        {!isConnected ? (
          <Login onLogin={onLogin} onLogout={onLogout} />
        ) : (
          <Home />
        )}
        {/* <Card className="login">
          <button className="button" type="button">
            Connect
          </button>
        </Card>
        <Card className="home">
          <h1>Welcome</h1>
        </Card> */}
      </main>
    </div>
  );
}

export default App;
