import IUserRepos from '../interfaces/IUserRepos';

function filterByForked(forked: string[], repos: IUserRepos[]): IUserRepos[]{
	let filteredRepos: IUserRepos[] = repos;
	const forkedState = forked.includes('sim') ? true : forked.includes('não') ? false : null;
	if(forkedState !== null){
		filteredRepos = repos.filter(repo => repo.fork === forkedState);
	}
	return filteredRepos;
}

export default filterByForked;