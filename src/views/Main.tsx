import React,{ useState, useEffect }  from 'react';
import UserPic from '../components/UserPic';
import CheckBoxFork from '../components/CheckBoxFork';
import UserRepo from '../components/UserRepo';
import DropDownFilter from '../components/DropDownFilter';
import InputSearch from '../components/InputSearch';
import RadioInputs from '../components/RadioInputs';
import getUserInfos from '../actions/getUserInfos';
import getUserRepos from '../actions/getUserRepos';
import getUserReposNPages from '../actions/getUserReposNPages';
import filterByLanguage from '../actions/filterByLanguage';
import filterByName from '../actions/filterByName';
import filterByForked from '../actions/filterByForked';
import orderByName from '../actions/orderByName';
import orderByUpdated_at from '../actions/orderByUpdated_at';
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
  const [hasFork, setHasFork] = useState<string[]>([]);
  const [filteredIssues, setfilteredIssues] = useState<string>('cleaned');
  const [orderedBy, setOrderedBy] = useState<string>('alphabetic');


  useEffect(() => {
    const fetchData = async () => {
      const allUserRepos: IUserRepos[] = [];
      const generalInfos = await getUserInfos('evandroLutz');
      if(generalInfos){
        setUserInfos(generalInfos);
        const nPages = await getUserReposNPages('evandroLutz');
        let counter = 1
        while(counter <= nPages){
          const repos = await getUserRepos('evandroLutz', counter);
          counter++;
          allUserRepos.push(...repos);
        }
        setUserRepos(allUserRepos);
        setfilteredUserRepos(allUserRepos);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    let repos: IUserRepos[];
    repos = filterByLanguage(filteredLang,userRepos);
    repos = filterByName(filteredName,repos);
    repos = filterByForked(hasFork,repos);
    const ordered = orderedBy === 'alphabetic' ? orderByName(repos) : orderByUpdated_at(repos);
    setfilteredUserRepos(ordered);
  }, [filteredLang, filteredName, userRepos, orderedBy, hasFork]);

  return (
    <div className="App">
      <header className="App-header">
        { 
        userInfos.message !== 'Not Found' ? 
        <>
        <UserInfosContext.Provider value={userInfos}>
          <UserPic/>
        </UserInfosContext.Provider>
        <UserAllReposContext.Provider value={{ hasFork , setHasFork, orderedBy, setOrderedBy, setfilteredName, setfilteredLang, filteredUserRepos, userRepos, setfilteredUserRepos }}>
          <DropDownFilter/>
          <InputSearch/>
          <RadioInputs/>
          <CheckBoxFork/>
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