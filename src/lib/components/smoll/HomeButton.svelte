<script>
	import { goto } from "$app/navigation";
	import HomeIcon from "$lib/Assets/HomeIcon.svelte";

    const home = () => {
        goto("/")
    }
</script>

<button class="flex items-center gap-1 bg-dark-khaki-600 py-0.5 px-3 rounded-2xl hover:bg-dusty-olive-500 text-lg font-medium shadow-sm hover:shadow-md text-white-smoke-50 h-8 transition-all duration-300" on:click={home}>
    <HomeIcon></HomeIcon>
    Home
</button>