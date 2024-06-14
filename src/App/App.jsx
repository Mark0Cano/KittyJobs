// Importing React
import { createContext, useState, useContext } from 'react'

// Importing Pages
import './App.css'

//* Importing components
import { JobListItem } from '../Components/JobListItem';
import { CreateJobButton } from '../Components/CreateJobButton';
import { JobCounter } from '../Components/JobCounter/JobCounter';
import { MyJobSearch } from '../Components/MyJobSearch';

// import { MyJobAppContext } from '../Utils/Context/index.jsx'
import { MyJobAppProvider } from '../Utils/Context/index.jsx'

 
//* App :3
function App() {
  //* Creating the estate for search component
  // const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <MyJobAppProvider>
        <div className='app-mainContainer'>
          <h2>My App :3</h2>
          <MyJobSearch 
          
          />
          <JobCounter />
          <JobListItem 
            
          />
            
          
          <div className='mainContainer-createButton-box'>
            <CreateJobButton>
              Let´s do something awesome :3
            </CreateJobButton>
          </div>
        </div>
        </MyJobAppProvider>
    </>
  )
}

export default App
