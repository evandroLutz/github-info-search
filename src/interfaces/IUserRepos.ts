interface IUserRepos {
    name: string;
    updated_at: string;
    language: string |  null;
    fork: boolean;
    size: number;
}

export default IUserRepos;