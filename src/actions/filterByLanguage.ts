import IUserRepos from '../interfaces/IUserRepos';

function filterByLanguage(language: string | null, repos: IUserRepos[]): IUserRepos[]{
	return repos.filter(repo => language === 'Todas' ? repo.language || repo.language === null : repo.language === (language === 'Não informada' ? null : language));
}

export default filterByLanguage;