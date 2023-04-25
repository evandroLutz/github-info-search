import React, { useState } from 'react';
import { useContext } from "react";
import UserAllReposContext from '../contexts/UserAllReposContext';
import Input from "../styles/Input";
import Button from "../styles/Button";
import { FaSearch } from 'react-icons/fa';

function InputSearchUserName(): JSX.Element {

    const { setUserName, setIsLoading  } = useContext(UserAllReposContext);

    const [inputValue, setInputValue] = useState<string>('evandroLutz');
    
    const [lastInputValue, setLastInputValue] = useState<string>('evandroLutz');

    return( 
      <>
      <Input onChange={event => {
        setInputValue(event.target.value === ''? 'evandroLutz': event.target.value);
        }} type="search" placeholder="evandroLutz"/>
      <Button onClick={event => {
          if (inputValue === lastInputValue) {
            alert('Por favor, preencha um nome diferente para buscar.');
            return setIsLoading ? setIsLoading(false) : null;
        } else {
            setUserName(inputValue);
            setLastInputValue(inputValue);
            return setIsLoading ? setIsLoading(true) : null;
        }
        }}>Buscar usuário <FaSearch/></Button>
      </>
    )
}

export default InputSearchUserName;