import React from 'react';
import { useContext } from "react";
import UserAllReposContext from '../contexts/UserAllReposContext';
import RadioContainer from '../styles/RadioContainer';

function InputSearch(): JSX.Element {

    const { hasFork , setHasFork } = useContext(UserAllReposContext);

    function oncheckBoxChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const checked = event.target.checked;
        const value = event.target.value;
        if(checked){
            if(!hasFork.includes(value)){
                setHasFork([value]);
            }
        } else{
            setHasFork(hasFork.filter(el => el !== event.target.value));
        }
    }

    return( 
        <RadioContainer>
            <label>
                <input
                    type="checkbox"
                    name="order"
                    value="sim"
                    onChange={oncheckBoxChange}
                    checked={hasFork.includes('sim')}
                />
                <span className="checkmark"></span>
                Sim
            </label>
            <label>
                <input
                    type="checkbox"
                    name="order"
                    value="não"
                    onChange={oncheckBoxChange}
                    checked={hasFork.includes('não')}
                />
                <span className="checkmark"></span>
                Não
            </label>
      </RadioContainer>
    )
}

export default InputSearch;