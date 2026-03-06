<script>
	import HomeButton from "$lib/components/smoll/HomeButton.svelte";
	import SearchBar from "$lib/components/smoll/SearchBar.svelte";
    import logoX from "/logoX.svg";
</script>

<nav class="flex items-center flex-wrap px-5 py-3 sticky top-0 backdrop-blur-sm shadow-sm">
    <div class="flex-1">
        <HomeButton></HomeButton>
    </div>

    <img class="h-16" src={logoX} alt="Logo">

    <div class="flex-1 flex justify-end">
        <SearchBar method="get" action="/"></SearchBar>
    </div>
</nav>