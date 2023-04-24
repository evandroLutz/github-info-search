import React, { useState } from 'react';
import { useContext } from "react";
import UserAllReposContext from '../contexts/UserAllReposContext';
import Input from "../styles/Input";
import Button from "../styles/Button";
import { FaSearch } from 'react-icons/fa';

function InputSearchUserName(): JSX.Element {

    const { setUserName } = useContext(UserAllReposContext);

    const [inputValue, setInputValue] = useState<string>('evandroLutz');

    return( 
      <>
      <Input onChange={event => {
        setInputValue(event.target.value ? event.target.value: 'evandroLutz')}} type="search" placeholder="evandroLutz"/>
      <Button onClick={event => {
        setUserName(inputValue)}}>Buscar usuário <FaSearch/></Button>
        
      </>
    )
}

export default InputSearchUserName;