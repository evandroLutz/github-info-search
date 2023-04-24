import React from 'react';
import { useContext } from "react";
import UserAllReposContext from '../contexts/UserAllReposContext';
import Input from "../styles/Input";

function InputSearch(): JSX.Element {

    const { setfilteredName } = useContext(UserAllReposContext);

    return( 
      <Input type="search" placeholder="Repositório contém..." onChange={event => {
        setfilteredName(event.target.value)}}/> 
    )
}

export default InputSearch;