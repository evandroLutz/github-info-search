import React from 'react';
import { useContext } from "react";
import UserAllReposContext from '../contexts/UserAllReposContext';
import Input from "../styles/Input";

function InputSearchSize(): JSX.Element {

    const { setfilteredSize } = useContext(UserAllReposContext);

    return( 
      <Input type="number" placeholder="Tamanho máx. em Kb" onChange={event => {
        setfilteredSize(Number(event.target.value))}}/> 
    )
}

export default InputSearchSize;