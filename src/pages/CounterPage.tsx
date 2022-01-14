import { Counter } from 'features/counter'

export const CounterPage = () => {
  return (
    <div>
      <header className="App-header">
        <h1 style={{ textAlign: 'center', margin: '5em auto' }}>Welcome to the React Redux Typescript Template</h1>
        <Counter />
      </header>
    </div>
  )
}
