import Card from "./components/UI/Card";

function App() {
  return (
    <div>
      <header className="main-header">
        <h1>Zen &amp; Web3</h1>
        <nav className="nav">
          <ul>
            <li>Wallet Address</li>
            <li>
              0x145420D3a0d2D410A690E47fe26F19B76e20E272
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Card className="login">
          <button className="button" type="button">
            Connect
          </button>
        </Card>
        <Card className="home">
          <h1>Welcome</h1>
        </Card>
      </main>
    </div>
  );
}

export default App;
