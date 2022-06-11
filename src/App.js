import React from 'react'
import Header from './components/Header/Header'
import "./App.scss"
import Main from "./components/Main/Main"
import Section from './components/Section/Section'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Main />
      <Section />
      <Projects />
    </div>
  )
}

export default App
