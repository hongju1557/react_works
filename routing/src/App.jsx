import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {BrowserRouter, Link, Routes, Route} from "react-router-dom"
import Main from './pages/Main'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Header from './layouts/Header'
import Board from './pages/Board'
import BoardDetail from './pages/BoardDetail'

function App() {

  return (
    <>
    <section className='app'>
      <BrowserRouter>

      <Header></Header>

        <div className='content'>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/Board" element={<Board/>} />
            <Route path="/board/:id" element={<BoardDetail/>}/>
          </Routes>

        </div>
      
      </BrowserRouter>

    </section>
    </>
  )
}

export default App
