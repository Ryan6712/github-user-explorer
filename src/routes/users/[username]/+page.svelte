<script>
	import ReposCard from '$lib/components/big/ReposCard.svelte';
	import UserDetailCard from '$lib/components/big/UserDetailCard.svelte';

    export let data;
    const { user } = data;
    const { repos } = data;
    // console.log(data);
</script>

<section class="user-detail">
    <UserDetailCard user={user}></UserDetailCard>
    <ReposCard repos={repos}></ReposCard>
</section>

<style>
    .user-detail {
        display: grid;
        grid-template-columns: 450px 1fr;
    }

    
</style>