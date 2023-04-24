import React from 'react';
import { useContext } from "react";
import UserAllReposContext from '../contexts/UserAllReposContext';
import RadioContainer from '../styles/RadioContainer';

function InputSearch(): JSX.Element {

    const { orderedBy , setOrderedBy } = useContext(UserAllReposContext);
  

    function onRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
        setOrderedBy(event?.target?.value);
    }

    return( 
        <RadioContainer>
            <label>
                <input
                    type="radio"
                    name="order"
                    value="alphabetic"
                    checked={orderedBy === 'alphabetic'}
                    onChange={onRadioChange}
                />
            <span className="checkmark"></span>
            Alfabeticamente
            </label>
            <label>
                <input
                    type="radio"
                    name="order"
                    value="updated_at"
                    checked={orderedBy === 'updated_at'}
                    onChange={onRadioChange}
                />
            <span className="checkmark"></span>
            Mais recentes
            </label>
      </RadioContainer>
    )
}

export default InputSearch;