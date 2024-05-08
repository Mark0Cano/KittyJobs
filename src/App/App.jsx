// Importing React
import { useState } from 'react'

// Importing Pages
import './App.css'

//* Importing components
import TodoItem from '../Components/TodoItem/';
import CreateJobButton from '../Components/CreateJobButton';
import { JobCounter } from '../Components/JobCounter/JobCounter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>My App :3</h2>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <JobCounter />

        <CreateJobButton>Let´s do something awesome :3</CreateJobButton>
      </div>
    </>
  )
}

export default App
