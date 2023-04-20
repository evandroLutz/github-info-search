import IUserRepos from '../interfaces/IUserRepos';

function filterByLanguage(language: string, repos: IUserRepos[]): IUserRepos[]{
    return repos.filter(repo => repo.language === language);
}

export default filterByLanguage;