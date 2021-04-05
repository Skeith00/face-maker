import React from 'react'
import FaceSelector from './FaceSelector'
import FaceViewer from './FaceViewer'

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  
  return (
    <div id="wrapper">
      {/*<h1>Greetings</h1>
      <Hello />
      <Hello name="George" />
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} /> */}
        <FaceViewer />
        <FaceSelector />
    </div>
  )
}

export default App