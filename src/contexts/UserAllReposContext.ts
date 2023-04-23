import IUserAllRepos from '../interfaces/IUserAllRepos';
import { createContext } from "react";

const UserAllReposContext = createContext<IUserAllRepos>({
  userRepos: [],
  orderedBy: '',
  hasFork: [],
  filteredUserRepos: [],
  setfilteredUserRepos: () => {},
  setfilteredLang:  () => {},
  setfilteredName:  () => {},
  setfilteredSize: () => {},
  setOrderedBy:  () => {},
  setHasFork:  () => {},
  setUserName:  () => {},
});

export default UserAllReposContext;