import React,{ useState, useEffect }  from 'react';
import UserPic from '../components/UserPic';
import UserRepo from '../components/UserRepo';
import DropDownFilter from '../components/DropDownFilter';
import InputSearch from '../components/InputSearch';
import getUserInfos from '../actions/getUserInfos';
import getUserRepos from '../actions/getUserRepos';
import filterByLanguage from '../actions/filterByLanguage';
import filterByName from '../actions/filterByName';
import UserInfosContext from '../contexts/UserInfosContext';
import UserRepoContext from '../contexts/UserRepoContext';
import UserAllReposContext from '../contexts/UserAllReposContext';
import IUserInfos from '../interfaces/IUserInfos';
import IUserRepos from '../interfaces/IUserRepos';


function Main(): JSX.Element {

  const [userInfos, setUserInfos] = useState<IUserInfos>({ avatar_url: "", message: "" });
  const [userRepos, setUserRepos] = useState<IUserRepos[]>([]);
  const [filteredUserRepos, setfilteredUserRepos] = useState<IUserRepos[]>([]);
  const [filteredLang, setfilteredLang] = useState<string>('Todas');
  const [filteredName, setfilteredName] = useState<string>('');


  useEffect(() => {
    const fetchData = async () => {
      const generalInfos = await getUserInfos('evandroLutz');
      if(generalInfos){
        setUserInfos(generalInfos);
        const repos = await getUserRepos('evandroLutz');
        setUserRepos(repos);
        setfilteredUserRepos(repos);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    let repos: IUserRepos[];
    repos = filterByLanguage(filteredLang,userRepos);
    repos = filterByName(filteredName,repos);
    setfilteredUserRepos(repos);
  }, [filteredLang, filteredName, userRepos]);

  return (
    <div className="App">
      <header className="App-header">
        { 
        userInfos.message !== 'Not Found' ? 
        <>
        <UserInfosContext.Provider value={userInfos}>
          <UserPic/>
        </UserInfosContext.Provider>
        <UserAllReposContext.Provider value={{ setfilteredName, setfilteredLang, filteredUserRepos, userRepos, setfilteredUserRepos }}>
          <DropDownFilter/>
          <InputSearch/>
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