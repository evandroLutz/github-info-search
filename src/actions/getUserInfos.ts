import  UserInfos from '../interfaces/UserInfos';

async function getUserInfos(userName: string, route? : string ): Promise<UserInfos> {
  
  try{
    const resp = await fetch(`https://api.github.com/users/${userName}${route ? '/'+route: ''}`);
    const body = await resp.json();
    return body;
  } catch(err: unknown){
    throw new Error();
  }
}

export default getUserInfos;