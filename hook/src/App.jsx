import './App.css'
import Counter from './components/Counter'
import InputValue from './components/inputValue'
import Drinks from './components/Drinks'
import DrinkList from './components/DrinkList'
import IdList from './components/IdList'

function App() {

  return (
    <>
      <div className='app'>
        <h2>리액트 상태 관리</h2>
        {/* <Counter></Counter> */}
        {/* <InputValue></InputValue> */}
        <Drinks></Drinks>
        <IdList></IdList>
      </div>
    </>
  )
}

export default App
