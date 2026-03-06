import { getUser, getUserRepos } from "$lib/api.js";
import { repoMaps } from "$lib/utils/mapping.js";


export const load = async ({ fetch, params, url }) => {
    const page = Number(url.searchParams.get("page")) || 1;

    const user = await getUser(params.username);
    const resRepo = await getUserRepos(params.username, page);
    const repos = await repoMaps(resRepo);
    
    
    return { user, repos }
}