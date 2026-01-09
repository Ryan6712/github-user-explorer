export const userMap = (x) => {
    const mapping = x.map((u) => ({
        username : u.login,
        avatar : u.avatar_url
    }))

    return mapping
}

export const repoMaps = (x) => {
    const mapping = x.map((u) => ({
            name : u.name,
            description : u.description,
            language : u.language,
            topics : u.topics
        }))

        return mapping;
}