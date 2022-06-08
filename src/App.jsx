import React, { useState } from "react"
import data from "./data"
import List from "./List"

function App() {
  const [people, setPeople] = useState(data)

  return (
    <div className="App">
      <h3>{people.length} aniversariantes hoje</h3>
      <List people={people} />
      <div className='button'>
        <button onClick={() => setPeople([])}>Limpar tudo</button>
      </div>
    </div>
  )
}

export default App
