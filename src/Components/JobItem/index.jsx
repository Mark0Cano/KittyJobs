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

    return (
        <li className="jobItem-li">
            <span
                //* We bring de state simulation ass a props
                onClick={props.onDone}
            >
                <TaskOutlinedIcon className={`normalIcon ${props.jobStatus && 'finishedStatusIcon'}`}/>
            </span>
            <p
                className={`normalText  ${props.jobStatus && 'finishedStatusText'}`}
            >{props.jobDescription}</p>
            <span
                // onClick={ goodByJob }

                //* We bring de state simulation ass a props
                onClick={props.onDelete}
            >
                <DeleteOutlineIcon className='normalIcon normalIconDelete '/>
            </span>                
        </li>
    );
}

export { JobItem };