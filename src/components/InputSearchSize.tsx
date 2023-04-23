import React from 'react';
import { useContext } from "react";
import UserAllReposContext from '../contexts/UserAllReposContext';

function InputSearchSize(): JSX.Element {

    const { setfilteredSize } = useContext(UserAllReposContext);

    return( 
      <input type="number" placeholder="Tamanho máx. em Kb" onChange={event => {
        setfilteredSize(Number(event.target.value))}}/> 
    )
}

export default InputSearchSize;