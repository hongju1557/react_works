import './App.css'
import Counter from './components/Counter'
import InputValue from './components/inputValue'
import Drinks from './components/Drinks'
import DrinkList from './components/DrinkList'
import IdList from './components/IdList'
import Clock from './components/Clock'
import User from './components/User'
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'

function App() {

  return (
    <>
      <div className='app'>
        {/* <h2>리액트 상태 관리</h2> */}
        {/* <Counter></Counter> */}
        {/* <InputValue></InputValue> */}
        {/* <Drinks></Drinks> */}
        {/* <IdList></IdList> */}
        {/* <Clock></Clock> */}
        {/* <User></User> */}
        {/* <SignUp></SignUp> */}
        <SignIn></SignIn>
      </div>
    </>
  )
}

export default App
