import IUserAllRepos from '../interfaces/IUserAllRepos';
import { createContext } from "react";

const UserAllReposContext = createContext<IUserAllRepos>({
  userRepos: [],
  filteredUserRepos: [],
  setfilteredUserRepos: () => {},
  setfilteredLang:  () => {},
  setfilteredName:  () => {},
});

export default UserAllReposContext;