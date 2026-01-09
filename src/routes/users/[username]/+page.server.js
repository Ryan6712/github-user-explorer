import { getUser, getUserRepos } from "$lib/api.js";
import { repoMaps } from "$lib/utils/mapping.js";


export const load = async ({ fetch, params }) => {
    const user = await getUser(params.username);
    const resRepo = await getUserRepos(params.username);
    const repos = await repoMaps(resRepo);
    
    return { user, repos }
}