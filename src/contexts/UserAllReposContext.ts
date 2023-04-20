import IUserRepos from '../interfaces/IUserRepos';
import { createContext } from "react";

const UserAllReposContext = createContext<IUserRepos[]>([]);

export default UserAllReposContext;