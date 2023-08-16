import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/createStore'
import Greetings from './greetings'


export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Greetings/>} /> 
        </Routes> 
      </BrowserRouter>
    </Provider>
  )
}