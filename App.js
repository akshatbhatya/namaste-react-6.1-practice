import React from 'react'
import Header from './src/Components/Header/Header'
import Reasturant from './src/Components/Reasturant_card_parent/Reasturant'

function App() {
  return (
    <div>
      {Header()}
      <Reasturant/>
    </div>
  )
}

export default App
