//* Importing react
import { createContext } from "react";

//* First we create the context to export
export const MyJobAppContext = createContext();

//* Creating the context provider with a children onject by prop
export const MyJobAppProvider = ({ children }) => {
    // Here we describe the diferent states variables
    const [searchValue, setSearchValue] = useState('');

    // We return de context.provider with the state props
    return (
        <MyJobAppContext.Provider
        value={{
        //* ------> Props for the search component
            searchValue,
            setSearchValue
        //* ------> 
        }}>
            { children }

        </MyJobAppContext.Provider>
    )
}

