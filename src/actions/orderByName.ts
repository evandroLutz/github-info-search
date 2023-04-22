import IUserRepos from '../interfaces/IUserRepos';

function orderByName(repos: IUserRepos[]): IUserRepos[] {
    return repos.sort((itemA,itemB)=>{
        let itemAL = itemA.name.toLowerCase();
        let itemBL = itemB.name.toLowerCase();
        return itemAL === itemBL ? 0 : itemAL > itemBL ? 1 : -1;
    });
}

export default orderByName;