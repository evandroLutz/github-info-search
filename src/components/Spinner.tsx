import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

function Spinner(): JSX.Element {
    return(
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#663a82"
            ariaLabel="ball-triangle-loading"
            visible={true}
        />
    )
}


export default Spinner;