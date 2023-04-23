import getUserRepos from '../actions/getUserRepos';
import getUserReposNPages from '../actions/getUserReposNPages';
import IUserRepos from '../interfaces/IUserRepos';

async function getAllUserRepos(userName: string): Promise<IUserRepos[]> {
    const allUserRepos: IUserRepos[] = [];

      const nPages = await getUserReposNPages(userName);
      let counter = 1
      while(counter <= nPages){
        const repos = await getUserRepos(userName, counter);
        counter++;
        allUserRepos.push(...repos);
      }
    return allUserRepos;
  }

  export default getAllUserRepos;