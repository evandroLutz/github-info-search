import React from 'react';
import { useContext } from "react";
import UserRepoContext from '../contexts/UserRepoContext';
import Repo from "../styles/Repo";
import SvgContainer from '../styles/SvgContainer';
import { FaGithub, FaRegCopy } from  'react-icons/fa';
import copyToClipboard from '../actions/copyToClipboard';

function UserRepo(): JSX.Element {
    const repo = useContext(UserRepoContext);
    const name = repo?.name;
    const link = repo?.html_url;
    const clone = repo?.git_url;
    return(
        <Repo className="userRepo">
            <SvgContainer>
                <a href={link}>
                    <FaGithub/><span>Github</span>
                </a>
                {
                    clone ? <div onClick={()=>{
                        copyToClipboard(clone)
                        alert('link copiado para a área de transferência!')
                    }}>
                        <FaRegCopy/><span>Clonar</span>
                    </div>: null    
                }
                
            </SvgContainer>
            <h1>{name}</h1>
        </Repo>    
    )
}


export default UserRepo;