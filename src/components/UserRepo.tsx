import React from 'react';
import { useContext } from "react";
import UserRepoContext from '../contexts/UserRepoContext';
import Repo from "../styles/Repo";

function UserRepo(): JSX.Element {
    const repo = useContext(UserRepoContext);
    const name = repo?.name;
    const link = repo?.html_url;
    return(
        <Repo className="userRepo">
            <a href={link}>
            <h1>{name}</h1>
            </a>
        </Repo>    
    )
}


export default UserRepo;