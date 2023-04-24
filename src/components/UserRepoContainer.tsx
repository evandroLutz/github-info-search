import React from 'react';
import { useContext } from "react";
import UserAllReposContext from '../contexts/UserAllReposContext';
import UserRepoContext from '../contexts/UserRepoContext';
import UserRepo from '../components/UserRepo';
import RepoContainer from "../styles/RepoContainer";

function UserRepoContainer(): JSX.Element {
    const user = useContext(UserAllReposContext);

    return(
        <RepoContainer className="userRepoContainer">
            {user.userRepos.map((repo: any, index: number) => (
                <UserRepoContext.Provider key={index} value={repo}>
                <UserRepo/>
                </UserRepoContext.Provider>
            ))}
        </RepoContainer>    
    )
}


export default UserRepoContainer;