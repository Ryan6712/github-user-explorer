<script>
    import UsersCard from '$lib/components/big/UsersCard.svelte';
	import { goto } from '$app/navigation';
    import { page } from '$app/state';

    export let data;
    $: total = data.totalGet;
    $: pageData = data.page;
    
    const nextPage = () => {
        if(pageData != undefined) {
            let url = new URL(page.url);
            let params = url.searchParams;
            pageData += 1;
            params.set('page', String(pageData));
            return goto(`${url}`)
        }
        return alert("ada error")
    }

    const backPage = () => {
        if(pageData != undefined && pageData > 1){
            let url = new URL(page.url);
            let params = url.searchParams;
            pageData -= 1;
            params.set('page', String(pageData));
            return goto(`${url}`)
        }
        return alert("sudah tidak bisa back");
    }
</script>
{#if total < 1}
    <h1>kosong</h1>
{:else}
    <div class="flex justify-center">
        <UsersCard users={data.users}></UsersCard>
    </div>
    {#if pageData != undefined && total > 18}
        {#if pageData > 1 }
            <button on:click={backPage}>back</button>
        {/if}
        <button on:click={nextPage}>next</button>
    {/if}
{/if}
