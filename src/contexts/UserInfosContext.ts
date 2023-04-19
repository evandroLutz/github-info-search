import { createContext } from "react";

const UserInfosContext = createContext<UserInfos | undefined>(undefined);

export default UserInfosContext;