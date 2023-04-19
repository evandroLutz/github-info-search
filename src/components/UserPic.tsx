import React from 'react';
import { useContext } from "react";
import UserInfosContext from '../contexts/UserInfosContext';


function UserPic(): JSX.Element {
    const user = useContext(UserInfosContext);
    const url = user?.avatar_url;
    console.log('userPic', user);
    return(
        <div className="userPic">
            <img src={url} alt="imagem do usuário"/>
        </div>    
    )
}


export default UserPic;