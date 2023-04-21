import React from 'react';
import { useContext } from "react";
import UserAllReposContext from '../contexts/UserAllReposContext';

function InputSearch(): JSX.Element {

    const { setfilteredName } = useContext(UserAllReposContext);

    return( 
      <input type="search" placeholder="Pesquisar por nome" onChange={event => {
        setfilteredName(event.target.value)}}/> 
    )
}

export default InputSearch;