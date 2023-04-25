import React,{ useState, useEffect }  from 'react';
import UserPic from '../components/UserPic';
import UserInfos from '../components/UserInfos';
import CheckBoxFork from '../components/CheckBoxFork';
import DropDownFilter from '../components/DropDownFilter';
import InputSearch from '../components/InputSearch';
import InputSearchSize from '../components/InputSearchSize';
import RadioInputs from '../components/RadioInputs';
import ContentSeparator from '../components/ContentSeparator';
import InputSearchUserName from '../components/InputSearchUserName';
import UserRepoContainer from '../components/UserRepoContainer';


import UserInfosContext from '../contexts/UserInfosContext';
import UserAllReposContext from '../contexts/UserAllReposContext';
import ContentSeparatorContext from '../contexts/ContentSeparatorContext';

import IUserInfos from '../interfaces/IUserInfos';
import IUserRepos from '../interfaces/IUserRepos';

import organizeRepos from '../actions/organizeRepos';
import getUserInfos from '../actions/getUserInfos';
import getAllUserRepos from '../actions/getAllUserRepos';

import HorizontalContainer from "../styles/HorizontalContainer";
import ContentContainerDivisor from "../styles/ContentContainerDivisor";
import VerticalContainer from "../styles/VerticalContainer";

function Main(): JSX.Element {

  const [userInfos, setUserInfos] = useState<IUserInfos>({ avatar_url: "", message: "not found", name: "", location: "", public_repos: 0 });
  const [userRepos, setUserRepos] = useState<IUserRepos[]>([]);
  const [filteredUserRepos, setfilteredUserRepos] = useState<IUserRepos[]>([]);
  const [filteredLang, setfilteredLang] = useState<string>('Todas');
  const [filteredName, setfilteredName] = useState<string>('');
  const [hasFork, setHasFork] = useState<string[]>([]);
  const [filteredSize, setfilteredSize] = useState<number | null>(null);
  const [orderedBy, setOrderedBy] = useState<string>('alphabetic');
  const [userName, setUserName] = useState<string>('evandroLutz');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
        const generalInfos = await getUserInfos(userName);
        if(!generalInfos.message){
          const allUserRepos = await getAllUserRepos(userName);
          setUserInfos(generalInfos);
          setUserRepos(allUserRepos);
          setfilteredUserRepos(allUserRepos);
        }
        setIsLoading(false);
    })();
  }, [userName]);

  useEffect(() => {
    const organizedRepos = organizeRepos(filteredLang, filteredName, userRepos, orderedBy, hasFork, filteredSize);
    setfilteredUserRepos(organizedRepos);
  }, [filteredLang, filteredName, userRepos, orderedBy, hasFork, filteredSize]);
  
  return (
    <div className="App">
      <header className="App-header">
        { 
        <>
        <UserInfosContext.Provider value={userInfos}>
          <HorizontalContainer>
            <UserPic/> 
            <UserInfos/>
          </HorizontalContainer>
        </UserInfosContext.Provider>

        <UserAllReposContext.Provider 
          value={{ hasFork, setHasFork, orderedBy, 
            setOrderedBy, setfilteredSize, setfilteredName, setfilteredLang, 
            filteredUserRepos, userRepos, setfilteredUserRepos, setUserName, setIsLoading
          }}>

          <ContentContainerDivisor>
            <HorizontalContainer>
              <InputSearchUserName/>
            </HorizontalContainer>

            <>
              <UserAllReposContext.Provider value={{ hasFork, setHasFork, orderedBy, setOrderedBy, setfilteredSize, 
                setfilteredName, setfilteredLang, filteredUserRepos, userRepos: filteredUserRepos, setfilteredUserRepos, setUserName, isLoading }}> 
                <>
                <UserRepoContainer/>
                </>
              </UserAllReposContext.Provider>
            </>

            <VerticalContainer>
              <DropDownFilter/>
              <InputSearch/>
              <ContentSeparatorContext.Provider value={'Exibir:'}>
                <ContentSeparator/>
              </ContentSeparatorContext.Provider>
              <RadioInputs/>
              <ContentSeparatorContext.Provider value={'É fork ?'}>
                <ContentSeparator/>
              </ContentSeparatorContext.Provider>
              <CheckBoxFork/>
              <InputSearchSize/>
            </VerticalContainer>

          </ContentContainerDivisor>

        </UserAllReposContext.Provider>
        </>
        }
      </header>
    </div>
  );
}

export default Main;