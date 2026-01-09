import { userMap } from "$lib/utils/mapping.js";
import { getAllUsers, searchUser } from "$lib/api.js";

export const load = async ({ fetch, url }) => {
    const q = url.searchParams.get("q")
    // const page = Number(url.searchParams.get("page"));
    let users
    if(!q) {
        const res = await getAllUsers();
        users = await userMap(res);
        return { users }
    }

    const res = await searchUser(q)
    const totalGet = res.total_count;
    users = await userMap(res.items);
    return {
        users,
        totalGet,
        q
    }

}