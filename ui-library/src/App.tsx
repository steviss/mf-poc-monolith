import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { Button, Input } from './components/atoms'
import { InputField } from './components/molecules'
import './index.css'

const App = () => {
  const [error, setError] = useState<string | undefined>(undefined)
  const onButtonClick = () => (!error ? setError('Testing field Erorr') : setError(undefined))
  return (
    <div className="container">
      <div>Name: ui-library</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <Button onClick={onButtonClick}>Test</Button>
      <Input placeholder="Testing" />
      <InputField label="testing" error={!!error} errorMessage={error} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
