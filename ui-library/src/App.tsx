import React from 'react'
import ReactDOM from 'react-dom'

import { Button, Input } from './components/atoms'
import './index.css'

const App = () => (
  <div className="container">
    <div>Name: ui-library</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button>Test</Button>
    <Input placeholder="Testing" />
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
