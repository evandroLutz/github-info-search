import  IUserRepos from '../interfaces/IUserRepos';

async function getUserRepos(userName: string, page? : number ): Promise<IUserRepos[]> {
  
  try{
    const resp = await fetch(`https://api.github.com/users/${userName}/repos?page=${page}`);
    const body = await resp.json();
    return body;
  } catch(err: unknown){
    throw new Error();
  }
}

export default getUserRepos;