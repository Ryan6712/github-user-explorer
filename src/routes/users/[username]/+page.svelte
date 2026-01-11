<script>
	import UserDetailCard from '$lib/components/big/UserDetailCard.svelte';

    export let data;
    const { user } = data;
    console.log(data);
    
</script>

<UserDetailCard user={user}></UserDetailCard>