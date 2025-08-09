import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:opacity-80 transition-opacity">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:opacity-80 transition-opacity">
          <img src={reactLogo} className="h-24 w-24" alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-4xl font-bold mb-8 text-primary">Grand Tycoon</h1>
      
      <div className="bg-card text-card-foreground rounded-lg border p-8 max-w-md w-full text-center">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors mb-4"
        >
          count is {count}
        </button>
        <p className="text-muted-foreground">
          Edit <code className="bg-muted px-2 py-1 rounded text-foreground">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="text-muted-foreground mt-8 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App;
