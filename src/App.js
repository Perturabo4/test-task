import { hot } from 'react-hot-loader/root'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import Layout from './components/Layout'
import ContentWindow from './components/Content-window'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="api/:id" element={<ContentWindow />} />
        </Route>
      </Routes>
      <Layout />
    </div>
  )
}

export default hot(App)
