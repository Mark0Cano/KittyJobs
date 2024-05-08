//* Importing React

//* Importing Css
import '../styleComponents.css';

const CreateJobButton = ({ children }) => {
    return (
        <button className="createjob-button">
            { children }
        </button>
    )
};

export default CreateJobButton;