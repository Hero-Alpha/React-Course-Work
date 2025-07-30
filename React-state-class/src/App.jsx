import './App.css';
import "./LikeButton.css";
import Counter from "./Counter.jsx";
import LikeButton from './LikeButton.jsx';
import LudoBoard from './LudoBoard.jsx';
import TodoList from './TodoList.jsx';
import LotteryGame from './LottteryGame.jsx';

function App() {
  return (
    <>
      <h1>States in React</h1>
      <Counter></Counter>
      <hr />
      <h1>Like Button</h1>
      <h5>Tadaaaaa!!</h5>
      <LikeButton></LikeButton>
      <hr />
      <h1>A State Game</h1>
      <LudoBoard></LudoBoard>
      <hr />
      <h1>ToDo List</h1>
      <TodoList></TodoList>
      <hr />
      <h1>Lottery Game</h1>
      <LotteryGame n={3} winningSum={15}></LotteryGame>
      {/* <Ticket ticket={[0,1,2]}></Ticket> */}
    </>
  )
}

export default App
