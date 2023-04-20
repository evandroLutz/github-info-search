import IUserRepos from '../interfaces/IUserRepos';
import { createContext } from "react";

interface IUserAllReposContext {
  userRepos: IUserRepos[];
  setfilteredUserRepos: React.Dispatch<React.SetStateAction<IUserRepos[] | undefined>>
}

const UserAllReposContext = createContext<IUserAllReposContext>({
  userRepos: [],
  setfilteredUserRepos: () => {},
});

export default UserAllReposContext;