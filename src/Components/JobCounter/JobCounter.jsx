//* Importing React
import { useContext } from 'react';

//* Importing App Context 
import { MyJobAppContext } from '../../Utils/Context';

//* Importing utils
import defaultJobs from '../../Utils/DefaultJobs';

//* Importing Css

//* Component
const JobCounter = () => {
    const context = useContext(MyJobAppContext);

    const totalJobs = context.jobs.length;
    const doneJobs = (context.jobs.filter(job => !!job.finished).length);

    return (
        <div className="jobCounter-container">
            <div>
                { totalJobs } 
            </div>
            <div>
                { doneJobs }
            </div>
        </div>
    )
}

export { JobCounter };