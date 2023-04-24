import React, { useContext, useState, useEffect } from 'react';
import UserAllReposContext from '../contexts/UserAllReposContext';
import getAllLanguages from '../actions/getAllLanguages';
import DropDown from '../styles/DropDown';
import SvgContainer from '../styles/SvgContainer';
import { FaRegFileCode } from  'react-icons/fa';
function DropDownFilter(): JSX.Element {

    const [languages, setLanguages] = useState<string[]>();
    const { userRepos, setfilteredLang } = useContext(UserAllReposContext);
  
    useEffect(() => {
        const fetchData = async () => {
            setLanguages(getAllLanguages(userRepos));
        }
        fetchData();
    }, [userRepos]);


    return(
        <SvgContainer className='dropDown'>
            <FaRegFileCode/>
            <DropDown name='languages' id='languages' onChange={event => setfilteredLang(event.target.value)}>
                <option value='' disabled selected hidden>linguagem.</option>
                {
                     languages?.map((language, index) => (
                        <option value={language} >{language}</option>
                    ))
                }
                <option value='Todas' >Todas</option>
            </DropDown>
        </SvgContainer>    
    )
}


export default DropDownFilter;