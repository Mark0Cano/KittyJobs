//* Importing React

//* Importing Css

//* Component
const JobCounter = ({ totalJobs, completedJobs }) => {
    return (
        <div className="jobCounter-container">
            <div>
                { completedJobs }
                
            </div>
            <div>
           
                { totalJobs }
            </div>
        </div>
    )
}

export { JobCounter };