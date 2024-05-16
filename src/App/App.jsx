// Importing React
import { useState } from 'react'

// Importing Pages
import './App.css'

//* Importing components
import { JobListItem } from '../Components/JobListItem';
import { CreateJobButton } from '../Components/CreateJobButton';
import { JobCounter } from '../Components/JobCounter/JobCounter';
import { MyJobSearch } from '../Components/MyJobSearch';
import { JobItem } from '../Components/JobItem/';

//* Importing utils
import defaultJobs from '../Utils/DefaultJobs';
 
//* App :3
function App() {
  //* Creating the estate for search component
  // const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div className='app-mainContainer'>
        <h2>My App :3</h2>
        <MyJobSearch 
          // searchValue={searchValue}
          // setSearchValue={setSearchValue}
        />
        <JobCounter completedJobs = { 16 }  totalJobs = { 8 } />
        <JobListItem>
          { defaultJobs.map(currentJob => (
          <JobItem 
            key={currentJob.job}
            jobDescription={currentJob.job}
            jobStatus={currentJob.finished}
            jobType={currentJob.type} />
          ))}
        </JobListItem>
        <div className='mainContainer-createButton-box'>
          <CreateJobButton>
            Let´s do something awesome :3
          </CreateJobButton>
        </div>
      </div>
    </>
  )
}

export default App
