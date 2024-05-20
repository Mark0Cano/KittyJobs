//* Importing React
import { useContext } from 'react';

//* Importing utils
import defaultJobs from '../../Utils/DefaultJobs';

//* Importing App Context 
import { MyJobAppContext } from '../../Utils/Context';

//* Importiong Icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';

//* Importing Styles
import '../styleComponents.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const JobItem = (props) => {
    // Caling the context
    const myContext = useContext(MyJobAppContext);

    const goodByJob = () => {
        const mySplice = props.jobDescription;
        console.log('Hola' + props.jobDescription);
        console.log(myContext.jobs[0]);
        console.log('I make a splice :3' + mySplice); 
        myContext.jobs.map((job) => {
            if(job.job == mySplice) {
                console.log('Working :3');
                const myNewArray = myContext.jobs.splice(props.jobDescription);
                console.log(myNewArray);
            }
        })
    }

    return (
        <li className="jobItem-li">
            <span
                //* We bring de state simulation ass a props
                onClick={props.onDone}
            >
                <TaskOutlinedIcon className={`normalIcon ${props.jobDescription && 'finishedStatusIcon'}`}/>
            </span>
            <p
                className={`normalText ${props.jobStatus && 'finishedStatusText'}`}
            >{props.jobDescription}</p>
            <button
                // onClick={ goodByJob }

                //* We bring de state simulation ass a props
                onClick={props.onDelete}
            >
                <DeleteOutlineIcon />
            </button>                
        </li>
    );
}

export { JobItem };