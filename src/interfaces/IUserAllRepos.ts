import IUserRepos from '../interfaces/IUserRepos';

interface IUserAllRepos {
  userRepos: IUserRepos[];
  filteredUserRepos: IUserRepos[];
  setfilteredUserRepos: React.Dispatch<React.SetStateAction<IUserRepos[]>>
  setfilteredLang: React.Dispatch<React.SetStateAction<string>>
  setfilteredName: React.Dispatch<React.SetStateAction<string>>
}

export default IUserAllRepos;