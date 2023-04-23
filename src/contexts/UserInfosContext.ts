import IUserInfos from '../interfaces/IUserInfos';
import { createContext } from "react";

const UserInfosContext = createContext<IUserInfos | undefined>(undefined);

export default UserInfosContext;