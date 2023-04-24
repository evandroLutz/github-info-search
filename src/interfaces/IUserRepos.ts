interface IUserRepos {
    name: string;
    updated_at: string;
    language: string |  null;
    fork: boolean;
    size: number;
    html_url: string;
    git_url: string;
}

export default IUserRepos;