import IUserRepos from '../interfaces/IUserRepos';

interface IUserAllRepos {
  userRepos: IUserRepos[];
  filteredUserRepos: IUserRepos[];
  setfilteredUserRepos: React.Dispatch<React.SetStateAction<IUserRepos[]>>
  setfilteredLang: React.Dispatch<React.SetStateAction<string>>
  setfilteredName: React.Dispatch<React.SetStateAction<string>>
  setOrderedBy: React.Dispatch<React.SetStateAction<string>>
  orderedBy: string;
  hasFork: string[];
  setHasFork: React.Dispatch<React.SetStateAction<string[]>>
}

export default IUserAllRepos;