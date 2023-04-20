import React, { useContext, useState, useEffect } from 'react';
import UserAllReposContext from '../contexts/UserAllReposContext';
import getAllLanguages from '../actions/getAllLanguages';


function DropDownFilter(): JSX.Element {

    const [languages, setLanguages] = useState<string[]>();
    const repo = useContext(UserAllReposContext);
  
    useEffect(() => {
        const fetchData = async () => {
            setLanguages(getAllLanguages(repo));
        }
        fetchData();
    }, [repo]);


    return(
        <div className="dropDown">
            <select name="languages" id="languages">
                <option value="" disabled selected hidden>linguagem.</option>
                {
                     languages?.map((language, index) => (
                        <option value={language}>{language}</option>
                    ))
                }
            </select>
        </div>    
    )
}


export default DropDownFilter;