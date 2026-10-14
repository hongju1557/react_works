import './App.css'
import {BrowserRouter, Routes, Route} from  "react-router-dom";
import AxiosTodos from './axios_ex/AxiosTodos';
import AxiosTodoById from './axios_ex/AxiosTodoById';
import AxiosNewTodo from './axios_ex/AxiosNewTodo';

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
        <Routes>
          {/* fetch */}
          {/* <Route path='/' element={<FetchAll />}></Route>
          <Route path='/:id' element={<FetchOneById/>}></Route> */}

          {/* axios */}
          <Route path='/' element={<AxiosTodos/>}></Route>
          <Route path='/axios/:id' element={<AxiosTodoById/>}></Route>
          <Route path='/axios-post' element={<AxiosNewTodo/>}></Route>
        </Routes>
        </BrowserRouter>
        
      </section>
    </>
  )
}

export default App
