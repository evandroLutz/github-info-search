import React, { useState } from 'react';
import { useContext } from "react";
import UserAllReposContext from '../contexts/UserAllReposContext';

function InputSearchUserName(): JSX.Element {

    const { setUserName } = useContext(UserAllReposContext);

    const [inputValue, setInputValue] = useState<string>('evandroLutz');

    return( 
      <>
      <input onChange={event => {
        setInputValue(event.target.value ? event.target.value: 'evandroLutz')}} type="search" placeholder="evandroLutz"/>
      <button onClick={event => {
        setUserName(inputValue)}}>Buscar usuário</button>   
      </>
    )
}

export default InputSearchUserName;