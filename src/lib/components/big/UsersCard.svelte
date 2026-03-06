<script>
	import { goto } from "$app/navigation";

    export let users
    
    const goDetail = (x) => {
        goto(`/users/${x}`)
    }
</script>

<div class="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    {#each users as u}
        <div class="card flex flex-col items-center gap-4 bg-white border-2 border-(--light-green) shadow-sm rounded-2xl w-54 h-80 pt-6">
            <img src={u.avatar} alt={u.username} class="w-32 border-2 border-gray-100 rounded-xl">
            <span class="text-3xl min-w-0 text-gray font-bold max-w-full breaks-words line-clamp-2">{u.username}</span>
            <button on:click={goDetail(u.username)} class="py-1.5 px-4 rounded-xl shadow-sm border border-transparent hover:border-(--green) hover:shadow-md hover:text-(--green) transition-all duration-300 text-md font-semibold">Go detail</button>
        </div>
    {/each}
</div>