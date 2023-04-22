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
  setOrderedBy:  () => {},
  setHasFork:  () => {},
});

export default UserAllReposContext;