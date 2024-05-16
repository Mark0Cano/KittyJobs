//* Importing React

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
    return (
        <li className="jobItem-li">
            <TaskOutlinedIcon className={`normalIcon ${props.jobStatus && 'finishedStatusIcon'}`}/>
            <p
                className={`normalText ${props.jobStatus && 'finishedStatusText'}`}
            >{props.jobDescription}</p>
            <DeleteOutlineIcon />
        </li>
    );
}

export { JobItem };