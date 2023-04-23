import IUserRepos from '../interfaces/IUserRepos';

function orderByUpdated_at(repos: IUserRepos[]): IUserRepos[] {
    return repos.sort((itemA,itemB)=>{
        let itemAL = Math.floor(new Date(itemA.updated_at).getTime() / 1000);
        let itemBL = Math.floor(new Date(itemB.updated_at).getTime() / 1000);
        return itemBL - itemAL;
    });
}

export default orderByUpdated_at;