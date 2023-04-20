import React,{ useState, useEffect }  from 'react';
import UserPic from '../components/UserPic';
import UserRepo from '../components/UserRepo';
import DropDownFilter from '../components/DropDownFilter';
import getUserInfos from '../actions/getUserInfos';
import getUserRepos from '../actions/getUserRepos';
import UserInfosContext from '../contexts/UserInfosContext';
import UserRepoContext from '../contexts/UserRepoContext';
import UserAllReposContext from '../contexts/UserAllReposContext';
import IUserInfos from '../interfaces/IUserInfos';
import IUserRepos from '../interfaces/IUserRepos';


function Main(): JSX.Element {

  const [userInfos, setUserInfos] = useState<IUserInfos>({ avatar_url: "", message: "" });
  const [userRepos, setUserRepos] = useState<IUserRepos[]>([]);
  const [filteredUserRepos, setfilteredUserRepos] = useState<IUserRepos[]>();

  useEffect(() => {
    const fetchData = async () => {
      const generalInfos = await getUserInfos('evandroLutz');
      if(generalInfos){
        setUserInfos(generalInfos);
        const repos = await getUserRepos('evandroLutz');
        setUserRepos(repos);
        console.log('repos', repos);
      }
    }
    fetchData();
  }, []);

 
  return (
    <div className="App">
      <header className="App-header">
        { 
        userInfos.message !== 'Not Found' ? 
        <>
        <UserInfosContext.Provider value={userInfos}>
          <UserPic/>
        </UserInfosContext.Provider>
        <UserAllReposContext.Provider value={{ userRepos, setfilteredUserRepos }}>
          <DropDownFilter/>
        </UserAllReposContext.Provider>
        </>
        : null
        }
        <>
          { 
          filteredUserRepos 
          ?
          filteredUserRepos.map((repo, index) => (
          <UserRepoContext.Provider key={index} value={repo}>
            <UserRepo/>
          </UserRepoContext.Provider>
          ))
          :  
          userRepos.map((repo, index) => (
            <UserRepoContext.Provider key={index} value={repo}>
              <UserRepo/>
            </UserRepoContext.Provider>
          ))}
        </>
      </header>
    </div>
  );
}

export default Main;