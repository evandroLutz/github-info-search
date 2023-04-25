import React from 'react';
import { useContext } from "react";
import UserAllReposContext from '../contexts/UserAllReposContext';
import Input from "../styles/Input";
import SvgContainer from '../styles/SvgContainer';
import { FaWeightHanging } from  'react-icons/fa';

function InputSearchSize(): JSX.Element {

    const { setfilteredSize } = useContext(UserAllReposContext);

    return(
      <SvgContainer> 
        <FaWeightHanging/>
        <Input type="number" placeholder="Tamanho máx. em Kb" onChange={event => {
          setfilteredSize(Number(event.target.value))}}/>
      </SvgContainer>   
    )
}

export default InputSearchSize;