import IUserRepos from '../interfaces/IUserRepos';

function getAllLanguages(repos: IUserRepos[]): string[]{
    const languages = repos?.map(repo => repo.language === null ? 'Não informada' : repo.language);
    return languages.filter((language, index) => languages.indexOf(language) === index); // filtra únicas
}

export default getAllLanguages;