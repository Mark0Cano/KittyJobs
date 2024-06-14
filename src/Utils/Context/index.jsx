//* Importing react
import { createContext, useState } from "react";

//* Importing utils
import defaultJobs from '../DefaultJobs';

//* First we create the context to export
export const MyJobAppContext = createContext();

//* Creating the context provider with a children onject by prop
export const MyJobAppProvider = ({ children }) => {
    //* Setting up the LocalStorage
    localStorage.setItem('MyJobs_01', defaultJobs);
    console.log('My Michis :3' + JSON.stringify(defaultJobs));

    // Getting the localStorage stocked Jobs :3
    const jobsOnLocalStorage  = localStorage.getItem('MyJobs_01');
    console.log('Megakulanina' + jobsOnLocalStorage);
    // Converting Jobs from Local Storage by Stringify
    let parsedJobs = JSON.stringify(jobsOnLocalStorage);
    console.log('Ninakulanina :3' + parsedJobs);

    // 

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
            // parsedJobs,
        }}>
            
            { children }

        </MyJobAppContext.Provider>
    )
}

