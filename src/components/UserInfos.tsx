import React from 'react';
import { useContext } from "react";
import UserInfosContext from '../contexts/UserInfosContext';
import UserInfosContainer from "../styles/UserInfosContainer";
import { FaUser, FaFolderOpen, FaLocationArrow } from 'react-icons/fa';

function UserInfos(): JSX.Element {

    const user = useContext(UserInfosContext);
    const name = user?.name;
    const public_repos = user?.public_repos;
    const location = user?.location;
   
    return(
        <UserInfosContainer className="userInfos">
            <p><FaUser/> {name}</p>
            <p><FaFolderOpen/> Repositórios públicos: {public_repos}</p>
            <p><FaLocationArrow/> Localização: {location}</p>
        </UserInfosContainer>    
    )
}


export default UserInfos;