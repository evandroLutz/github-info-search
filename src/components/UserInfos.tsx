import React from 'react';
import { useContext } from "react";
import UserInfosContext from '../contexts/UserInfosContext';
import UserInfosContainer from "../styles/UserInfosContainer";

function UserInfos(): JSX.Element {

    const user = useContext(UserInfosContext);
    const name = user?.name;
    const public_repos = user?.public_repos;
    const location = user?.location;
   
    return(
        <UserInfosContainer className="userInfos">
            <p>{name}</p>
            <p>Repositórios públicos: {public_repos}</p>
            <p>Localização: {location}</p>
        </UserInfosContainer>    
    )
}


export default UserInfos;