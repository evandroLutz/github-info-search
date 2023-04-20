import IUserRepos from '../interfaces/IUserRepos';

function filterByLanguage(language: string | null, repos: IUserRepos[]): IUserRepos[]{
    return repos.filter(repo => repo.language === (language === 'Não informada' ? null : language));
}

export default filterByLanguage;