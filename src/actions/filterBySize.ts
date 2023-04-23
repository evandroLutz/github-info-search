import IUserRepos from '../interfaces/IUserRepos';

function filterBySize(size: number | null, repos: IUserRepos[]): IUserRepos[]{
	return size ? repos.filter(repo => repo.size <= size) : repos;
}

export default filterBySize;