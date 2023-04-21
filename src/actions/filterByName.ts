import IUserRepos from '../interfaces/IUserRepos';

function filterByName(name: string, repos: IUserRepos[]): IUserRepos[]{
	return name === '' ? repos : repos.filter(repo => repo.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
}

export default filterByName;