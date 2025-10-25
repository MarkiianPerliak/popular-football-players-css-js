import './App.css';
import {FootballPlayersList} from "./components/FootballPlayersList.style.js"
import {FootballPlayersCard} from "./components/FootballPlayersCard.style.js"
import {players} from "./data/footballPlayers.js"

function App() {
  return (
    <div className="App">
      <FootballPlayersList>
        {players.map((player) => {
          return <FootballPlayersCard>
            <h3>{player.name}</h3>
            <p>{player.club}</p>
            <img style={{width: "500px"}} src={player.image} alt="img" />
          </FootballPlayersCard>
        })}
      </FootballPlayersList>
    </div>
  );
}

export default App;
