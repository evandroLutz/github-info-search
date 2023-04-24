import React from 'react';
import { useContext } from "react";
import UserAllReposContext from '../contexts/UserAllReposContext';
import RadioContainer from '../styles/RadioContainer';
import SvgContainer from '../styles/SvgContainer';
import { FaSortAlphaDown, FaBusinessTime } from  'react-icons/fa';

function InputSearch(): JSX.Element {

    const { orderedBy , setOrderedBy } = useContext(UserAllReposContext);
  

    function onRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
        setOrderedBy(event?.target?.value);
    }

    return( 
        <RadioContainer>
                <label>
                    <SvgContainer>
                        <input
                            type="radio"
                            name="order"
                            value="alphabetic"
                            checked={orderedBy === 'alphabetic'}
                            onChange={onRadioChange}
                        />
                        <span className="checkmark"></span>
                        <FaSortAlphaDown/>
                        Alfabeticamente
                    </SvgContainer>
                </label>
                <label>
                    <SvgContainer>
                        <input
                            type="radio"
                            name="order"
                            value="updated_at"
                            checked={orderedBy === 'updated_at'}
                            onChange={onRadioChange}
                        />
                        <span className="checkmark"></span>
                        <FaBusinessTime/>
                        Mais recentes
                    </SvgContainer>
                </label>
      </RadioContainer>
    )
}

export default InputSearch;