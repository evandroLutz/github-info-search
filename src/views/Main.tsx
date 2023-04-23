import React,{ useState, useEffect }  from 'react';
import UserPic from '../components/UserPic';
import CheckBoxFork from '../components/CheckBoxFork';
import UserRepo from '../components/UserRepo';
import DropDownFilter from '../components/DropDownFilter';
import InputSearch from '../components/InputSearch';
import InputSearchSize from '../components/InputSearchSize';
import RadioInputs from '../components/RadioInputs';
import UserInfosContext from '../contexts/UserInfosContext';
import UserRepoContext from '../contexts/UserRepoContext';
import UserAllReposContext from '../contexts/UserAllReposContext';
import IUserInfos from '../interfaces/IUserInfos';
import IUserRepos from '../interfaces/IUserRepos';
import organizeRepos from '../actions/organizeRepos';
import getUserInfos from '../actions/getUserInfos';
import getAllUserRepos from '../actions/getAllUserRepos';
import InputSearchUserName from '../components/InputSearchUserName';

function Main(): JSX.Element {

  const [userInfos, setUserInfos] = useState<IUserInfos>({ avatar_url: "", message: "" });
  const [userRepos, setUserRepos] = useState<IUserRepos[]>([]);
  const [filteredUserRepos, setfilteredUserRepos] = useState<IUserRepos[]>([]);
  const [filteredLang, setfilteredLang] = useState<string>('Todas');
  const [filteredName, setfilteredName] = useState<string>('');
  const [hasFork, setHasFork] = useState<string[]>([]);
  const [filteredSize, setfilteredSize] = useState<number | null>(null);
  const [orderedBy, setOrderedBy] = useState<string>('alphabetic');
  const [userName, setUserName] = useState<string>('evandroLutz');

  useEffect(() => {
    (async () => {
      const generalInfos = await getUserInfos(userName);
      if(!generalInfos.message){
        console.log(generalInfos,'general');
        const allUserRepos = await getAllUserRepos(userName);
        setUserInfos(generalInfos);
        setUserRepos(allUserRepos);
        setfilteredUserRepos(allUserRepos);
      }
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
        !userInfos.message ? 
        <>
        <UserInfosContext.Provider value={userInfos}>
          <UserPic/>
        </UserInfosContext.Provider>
        <UserAllReposContext.Provider 
          value={{ hasFork, setHasFork, orderedBy, 
            setOrderedBy, setfilteredSize, setfilteredName, setfilteredLang, 
            filteredUserRepos, userRepos, setfilteredUserRepos, setUserName
          }}>
          <InputSearchUserName/>
          <DropDownFilter/>
          <InputSearch/>
          <RadioInputs/>
          <CheckBoxFork/>
          <InputSearchSize/>
        </UserAllReposContext.Provider>
        </>
        : null
        }
        <>
        { 
          filteredUserRepos.map((repo, index) => (
            <UserRepoContext.Provider key={index} value={repo}>
              <UserRepo/>
            </UserRepoContext.Provider>
          ))
        }
        </>
      </header>
    </div>
  );
}

export default Main;