import './App.css'
import GameWrapper from './components/GameWrapper'
import KeyDisplay from './components/KeyDisplay'
import Game from './game/Game'

function App() {
  return (
    <div className="App">
      <GameWrapper>
        <Game />
        <KeyDisplay />
      </GameWrapper>
    </div>
  )
}

export default App