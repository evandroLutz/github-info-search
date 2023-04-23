import filterByLanguage from '../actions/filterByLanguage';
import filterByName from '../actions/filterByName';
import filterByForked from '../actions/filterByForked';
import filterBySize from '../actions/filterBySize';
import orderByName from '../actions/orderByName';
import orderByUpdated_at from '../actions/orderByUpdated_at';
import IUserRepos from '../interfaces/IUserRepos';

function organizeRepos(filteredLang: string, filteredName: string , userRepos: IUserRepos[], 
    orderedBy: string, hasFork: string[], filteredSize: number | null): IUserRepos[]{
    let repos: IUserRepos[];
    repos = filterByLanguage(filteredLang,userRepos);
    repos = filterByName(filteredName,repos);
    repos = filterByForked(hasFork,repos);
    repos = filterBySize(filteredSize,repos)
    return orderedBy === 'alphabetic' ? orderByName(repos) : orderByUpdated_at(repos);
}

export default organizeRepos;