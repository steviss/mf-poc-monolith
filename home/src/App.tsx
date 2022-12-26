import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from 'src/components'

import { ContactUsPage, HomePage } from 'src/pages'

import './index.css'

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
