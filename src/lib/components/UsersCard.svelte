<script>
	import { goto } from "$app/navigation";

    export let users
    
    const goDetail = (x) => {
        goto(`/users/${x}`)
    }
</script>

<div class="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-7 my-7">
    {#each users as u}
        <div class="card flex flex-col items-center gap-4 bg-white border-2 border-gray-200 shadow-sm rounded-2xl w-64 h-80 pt-6">
            <img src={u.avatar} alt={u.username} class="w-32 border-2 border-gray-100 rounded-xl">
            <span class="text-3xl text-gray font-bold">{u.username}</span>
            <button on:click={goDetail(u.username)} class="py-1.5 px-4 rounded-xl shadow-sm border border-transparent hover:border-blue-400 hover:shadow-md hover:text-blue-400 transition-all duration-300 text-md font-semibold">Go detail</button>
        </div>
    {/each}
</div>