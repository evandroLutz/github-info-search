import React from 'react';
import { useContext } from "react";
import UserRepoContext from '../contexts/UserRepoContext';

function UserRepo(): JSX.Element {
    const repo = useContext(UserRepoContext);
    const name = repo?.name;
    return(
        <div className="userRepo">
            <h1>{name}</h1>
        </div>    
    )
}


export default UserRepo;