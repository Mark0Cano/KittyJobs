//* Importing react
import { createContext, useState } from "react";

//* Importing utils
import defaultJobs from '../DefaultJobs';

//* First we create the context to export
export const MyJobAppContext = createContext();

//* Creating the context provider with a children onject by prop
export const MyJobAppProvider = ({ children }) => {
    // Here we describe the diferent states variables
    const [searchValue, setSearchValue] = useState('');

    const [jobs, setJobs] = useState(defaultJobs);
    // We return de context.provider with the state props
    return (
        <MyJobAppContext.Provider
        value={{
        //* ------> Props for the search component
            searchValue,
            setSearchValue,

        //* ------>  Props for the counter component
            jobs,
            setJobs,
        //* ------>  
        }}>
            
            { children }

        </MyJobAppContext.Provider>
    )
}

