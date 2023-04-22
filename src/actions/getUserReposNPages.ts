async function getUserRepos(userName: string, page? : string ): Promise<Number> {
  
  try{
    const resp = await fetch(`https://api.github.com/users/${userName}/repos${''}`);
    const links = resp?.headers.get('link');
    const linksArr = links?.split(',');
    const lastLink = linksArr?.find(el => el.indexOf('rel="last"') !== -1);
    const regex = /page=(\d+)/;
    const lastPageNumber = lastLink?.match(regex);
    return lastPageNumber ? Number(lastPageNumber[1]) : 1 ;
  } catch(err: unknown){
    throw new Error();
  }
}

export default getUserRepos;