import { Counter } from 'src/features/counter/Counter'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ textAlign: 'center', margin: '5em auto' }}>Welcome to the React Redux Typescript Template</h1>
        <Counter />
      </header>
    </div>
  )
}

export default App
