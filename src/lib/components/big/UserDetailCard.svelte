<script>
	import FollowsBlock from "../smoll/FollowsBlock.svelte";
	import UserContact from "../smoll/UserContact.svelte";

    export let user;
</script>

<div class="card flex flex-col justify-center items-center border w-90 h-129 rounded-2xl py-7 px-3 border-(--light-green) bg-white gap-3 shadow-md">
    <img src={user.avatar_url} alt={`${user.login} Icon`} class="h-23 rounded-2xl shadow-sm border border-transparent">
    <span class="mb-3 text-sm">@{user.login}</span>
    <h1 class="text-3xl font-bold">{user.name}</h1>
    <p class="w-63 h-fit p-3 bg-white rounded-2xl mb-1 border border-(--light-green) shadow-sm">{user.bio ?? "No Bio"}</p>
    <FollowsBlock follows={user}></FollowsBlock>
    <UserContact contact={user}></UserContact>
</div>