import React, { useContext } from 'react';
import ContentSeparatorContext from '../contexts/ContentSeparatorContext';
import Separator from "../styles/Separator";

function ContentSeparator(): JSX.Element {
    const value = useContext(ContentSeparatorContext);
    return(
        <Separator className="contentSeparator">
            {value}
        </Separator>    
    )
}


export default ContentSeparator;