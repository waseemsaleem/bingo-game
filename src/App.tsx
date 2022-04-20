import logo from './logo.svg'
import BlockItem from './components/BlockItem'
import './App.css'
import { useState } from 'react'
import { BoardStatusData, BoardData, WinningStates, BoardDataService, BoardStatusService, WinningStatesService } from './data/store'
import { Item } from './components/BlockInterface'

const App: React.FC = () => {

  const boardStatusDataService: BoardStatusData = new BoardStatusService();
  const boardDataService: BoardData = new BoardDataService();
  const winningStatesService: WinningStates = new WinningStatesService();

  const [boardStatusR, setBoardStatusR] = useState(boardStatusDataService.fetchBoardStatusData())
  const boardData = boardDataService.fetchBoardData();

  const [winningCondition] = useState(winningStatesService.fetchWinningStates())
  const [winStatus, setWinStatus] = useState(false)

  const gameResutls = () => {
    const boardState = boardStatusR
    for (let a = 0; a <= winningCondition.length - 1; a++) {
      const winCondition = winningCondition[a]
      const b = boardState[winCondition[0]]
      const i = boardState[winCondition[1]]
      const n = boardState[winCondition[2]]
      const g = boardState[winCondition[3]]
      const o = boardState[winCondition[4]]

      if (b === '' || i === '' || n === '' || g === '' || o === '') {
        setWinStatus(false)
        continue
      }
      if (b === i && i === n && n === g && g === o) {
        winningCondition.splice(a, 1)
        setWinStatus(true)
        break
      }
    }
  }

  const handleBlockChange = (item: Item) => {
    let boardStatus = boardStatusR
    boardStatus[item.id] = 'checked'
    setBoardStatusR(boardStatus)
    gameResutls()
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' width='150px' alt='logo' />
        <h1 className='text-capitalize text-center'>Bingo</h1>
      </header>
      <h1 className='bingo'>{winStatus ? 'Bingo 🎉' : ''}</h1>
      <main>
        <div className='bingo-grid'>
          {boardData.map((block: Item, index) => (
            <BlockItem
              block={block}
              key={index}
              handleBlockChange={handleBlockChange}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
