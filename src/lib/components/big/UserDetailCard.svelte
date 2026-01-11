<script>
	import FollowsBlock from "../smoll/FollowsBlock.svelte";
	import UserContact from "../smoll/UserContact.svelte";

    export let user;
</script>

<div class="card flex flex-col  items-center border-4 w-90 h-129 rounded-2xl py-7 px-1 border-(--dark-green) bg-(--light-green) gap-3">
    <img src={user.avatar_url} alt={`${user.login} Icon`} class="h-23 border-(--dark-green) border-4 rounded-2xl">
    <span class="mb-3 text-sm">@{user.login}</span>
    <h1 class="text-3xl font-bold">{user.name}</h1>
    <p class="w-63 h-18 p-3 bg-(--green) rounded-2xl mb-1 text-gray-300 border border-(--dark-green) ">{user.bio ?? "No Bio"}</p>
    <FollowsBlock follows={user}></FollowsBlock>
    <UserContact contact={user}></UserContact>
</div>