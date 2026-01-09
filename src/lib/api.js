// import { _ } from "$env/static/private";
import { configDotenv } from "dotenv";
configDotenv()


const main = process.env.API_URL;
const token = process.env.API_token;

// home awal semua(beberapa) user tampil disini
export const getAllUsers = async () => {
    return fetchUrl(`${main}/users?per_page=18`)
}

// ambil user detail
export const getUser = async (username) => {
    return fetchUrl(`${main}/users/${username}`)
}

// search user ada disetiap halaman 
export const searchUser = async (q) => {
    return fetchUrl(`${main}/search/users?q=${q}&per_page=18`)
}

// untuk ambil repo dari user
export const getUserRepos = async (username) => {
    return fetchUrl(`${main}/users/${username}/repos?per_page=10`)

}

export const fetchUrl = async (url) => {
    try {
        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(!res.ok) throw new Error(`Fetch error ${res.status}`);


        return res.json();
    } catch (error) {
        return console.error(`${error} error`)
    }
}