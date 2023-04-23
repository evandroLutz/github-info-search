import  IUserInfos from '../interfaces/IUserInfos';

async function getUserInfos(userName: string, route? : string ): Promise<IUserInfos> {

	try{
		const resp = await fetch(`https://api.github.com/users/${userName}`);
		const body = await resp.json();
		return body;
	} catch(err: unknown){
		throw new Error();
	}
}

export default getUserInfos;