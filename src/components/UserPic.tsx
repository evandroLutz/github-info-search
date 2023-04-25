import React from 'react';
import { useContext } from "react";
import UserInfosContext from '../contexts/UserInfosContext';
import UserPicContainer from "../styles/UserPicContainer";

function UserPic(): JSX.Element {
    const user = useContext(UserInfosContext);
    const url = user?.avatar_url;
    return(
        <UserPicContainer>
            <img src={url} alt="imagem do usuário"/>
        </UserPicContainer>    
    )
}

export default UserPic;