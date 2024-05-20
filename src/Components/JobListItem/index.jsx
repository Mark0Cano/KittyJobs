// Importing React
import { useContext } from 'react'

//* Importing Context
import { MyJobAppContext } from '../../Utils/Context/index'

//* Importing components

import { JobItem } from '../../Components/JobItem/index';

//* Component
const JobListItem = ({ children }) => {
    // Caling the context
    const myContext = useContext(MyJobAppContext);

    //* Creating a derivate state for search Jobs :3
    const findingJobs = myContext.jobs.filter((job) => {
        //* Transforming the text to lower case to match the finding and value text
        const jobLowerCaseText = job.job.toLowerCase();
        const findingLowerCaseText = myContext.searchValue.toLowerCase();
        return jobLowerCaseText.includes(findingLowerCaseText);
    
    })

    //* Creating our Encapsulated Function :D
    const finishedJobs = (text) => {
        //* Creating a copy from the original Jobs Array
        const finishedJobsArray = [...myContext.jobs];

        //* This is a funtion to locate the current index from a Job Item
        const jobIndex = finishedJobsArray.findIndex(
            (job) => job.job == text
        );

        //* This Function will set a JobFinished as True :v
        finishedJobsArray[jobIndex].finished = true;

        myContext.setJobs(finishedJobsArray)
    }
    return (
        <ul className="jobListItem">
            { findingJobs.map(currentJob => (
                <JobItem 
                key={currentJob.job}
                jobDescription={currentJob.job}
                jobStatus={currentJob.finished}
                jobType={currentJob.type}

                // Simulating a event to encapsulate a function inside it :3 and its send as a prop
                onDone={
                    //* We create a encapsulate a funtion to prevent 
                    //* the auto execution from react, because we need the currentJob.job ass a parameter
                    () => finishedJobs(currentJob.job)
                }    
            />
                )
            )}
        </ul>
    )
};

export { JobListItem };