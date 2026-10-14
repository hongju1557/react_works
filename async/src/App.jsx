import './App.css'
import FetchAll from './components/FetchAll'
import {BrowserRouter, Routes, Route} from  "react-router-dom";
import FetchOneById from './components/FetchOneById';

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<FetchAll />}></Route>
          <Route path='/:id' element={<FetchOneById/>}></Route>
        </Routes>
        </BrowserRouter>
        
      </section>
    </>
  )
}

export default App
