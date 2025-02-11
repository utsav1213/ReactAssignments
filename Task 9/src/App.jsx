import React from 'react'
import Person from './components/Person'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <Person name="Utsav" age={20}/>
      <Product name="i phone" price="$2000"/>
    </div>
  )
}

export default App
