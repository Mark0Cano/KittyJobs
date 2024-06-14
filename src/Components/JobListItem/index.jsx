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

    //* Creating our Encapsulated Function :D  to mark as done a job
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

    //* Creating our Encapsulated Function :D  to delete a job
    const deleteJob = (text) => {
        //* Creating a copy from the original Jobs Array
        const deletedJobArray = [...myContext.jobs];
        //* This is a funtion to locate the current index from a Job Item
        const jobIndex = deletedJobArray.findIndex(
            (job) => job.job == text
        );
        //* Separanting job by Splice method
        deletedJobArray.splice(jobIndex, 1);
        myContext.setJobs(deletedJobArray);
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
                // Simulating a event to encapsulate a function inside it :3 and its send as a prop
                onDelete={
                    //* We create a encapsulate a funtion to prevent 
                    //* the auto execution from react, because we need the currentJob.job ass a parameter
                    () => deleteJob(currentJob.job)
                }    
            />
                )
            )}
        </ul>
    )
};

export { JobListItem };