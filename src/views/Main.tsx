import React from 'react';
import UserPic from '../components/UserPic';
import getUserInfos from '../actions/getUserInfos';
import { useState, useEffect } from "react";
import UserInfosContext from '../contexts/UserInfosContext';
import UserInfos from '../interfaces/UserInfos';


function Main(): JSX.Element {

  const [userInfos, setuserInfos] = useState<UserInfos>({ avatar_url: "", message: "" });

  useEffect(() => {
    (async () => {
      const generalInfos = await getUserInfos('evandroLutz');
      setuserInfos(generalInfos);
      console.log('user',userInfos);
    })();
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
        <UserInfosContext.Provider value={userInfos}>
          <UserPic/>
        </UserInfosContext.Provider>
        <p>
          Edit <code>src/App.tsx</code> and save to reload 2.
        </p>
      </header>
    </div>
  );
}

export default Main;