import * as React from 'react'

function Greeting({initializeName}) {
  const [name, setName] = React.useState(initializeName)

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initializeName="Bob" />
}

export default App
