//* Importing React
import { useContext, useState } from 'react';
import { createContext } from 'react';

//* Importing App Context 
import { MyJobAppContext } from '../../Utils/Context';

//* Importing Css

//* Importing Icons
import SearchIcon from '@mui/icons-material/Search';

//* Component
const MyJobSearch = (
    // {
    // //* Props are coming inside as object
    // searchValue, 
    // setSearchValue
    // }
) => {
    //* Calling the context
    const context = useContext(MyJobAppContext);

    return (
        <div className="myJobSearch-Container">
            <input 
                className='myJobSearch-Container-input' 
                type="text" name="searching" 
                placeholder="Olvidas algo?"
                value={context.searchValue}

         /*------ Logic */
                onChange={(event) => {
                    context.setSearchValue(event.target.value);
                    }}
            />

            <button className='myJobSearch-Container-button'>
                <SearchIcon color="primary"/>
            </button>
        </div>
    )
}

export { MyJobSearch }