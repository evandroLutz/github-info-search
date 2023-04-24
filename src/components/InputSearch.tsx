import React from 'react';
import { useContext } from "react";
import UserAllReposContext from '../contexts/UserAllReposContext';
import Input from "../styles/Input";
import SvgContainer from '../styles/SvgContainer';
import { FaFolder } from  'react-icons/fa';

function InputSearch(): JSX.Element {

    const { setfilteredName } = useContext(UserAllReposContext);

    return(
      <SvgContainer> 
        <FaFolder/>
        <Input type="search" placeholder="Repositório contém..." onChange={event => {
          setfilteredName(event.target.value)}}/> 
      </SvgContainer>  
    )
}

export default InputSearch;