import './App.css'
import Counter from './components/Counter'
import InputValue from './components/inputValue'
import Drinks from './components/Drinks'
import DrinkList from './components/DrinkList'

function App() {

  return (
    <>
      <div className='app'>
        <h2>리액트 상태 관리</h2>
        {/* <Counter></Counter> */}
        {/* <InputValue></InputValue> */}
        <Drinks></Drinks>
      </div>
    </>
  )
}

export default App
