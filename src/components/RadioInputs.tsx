import React from 'react';
import { useContext } from "react";
import UserAllReposContext from '../contexts/UserAllReposContext';

function InputSearch(): JSX.Element {

    const { orderedBy , setOrderedBy } = useContext(UserAllReposContext);
  

    function onRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
        setOrderedBy(event?.target?.value);
    }

    return( 
        <div>
            <label>
                <input
                    type="radio"
                    name="order"
                    value="alphabetic"
                    checked={orderedBy === 'alphabetic'}
                    onChange={onRadioChange}
                />
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
                Mais recentes
            </label>
      </div>
    )
}

export default InputSearch;