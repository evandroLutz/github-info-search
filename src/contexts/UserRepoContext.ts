import IUserRepos from '../interfaces/IUserRepos';
import { createContext } from "react";

const UserRepoContext = createContext<IUserRepos | undefined>(undefined);

export default UserRepoContext;