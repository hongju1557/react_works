import './App.css'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import UseRefEx from './components/UseRefEx'
import InputFocus from './components/InputFocus'

function App() {

  return (
    <>
      <BrowserRouter>
      <header></header>
    <div>
      <Routes>
      {/* <Route path="/" element={<UseRefEx/>}></Route> */}
      <Route path="/" element={<InputFocus/>}></Route>
      </Routes>
    </div>
      </BrowserRouter>
    </>
  )
}

export default App
