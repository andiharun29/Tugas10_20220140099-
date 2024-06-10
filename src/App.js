
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Soccer Central</h1>
        <p>
          Dive into the world of soccer.
        </p>
        <div className="additional-content">
          <h2>About Us</h2>
          <p>Soccer Central is your ultimate destination for soccer news, highlights, and analysis.</p>
          <img src="https://i.pinimg.com/originals/92/5e/90/925e9059b3be479a82d71ee76376073b.jpg" alt="Soccer" />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main className="App-main">
        <h2>Featured Matches</h2>
        <div className="matches">
          <div className="match">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaIWzPEzdC0sFqBWJ6YZ_adw2Si17kRoGS3Q&s" alt="Match 1" />
            <p>Match 1: Liverpool FC vs Real Madrid CF</p>
          </div>
          <div className="match">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCopby2g82VeUn4OZfUb_ppsDquVTuHefdAg&s" alt="Match 2" />
            <p>Match 2: Atlético de Madrid vs Borussia Dortmund</p>
          </div>
          <div className="match">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlnqQdk6svBQNy-4aZSowDIWvbiylpAgRwPA&s" alt="Match 3" />
            <p>Match 3: FC Barcelona vs Paris Saint-Germain F.C.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
