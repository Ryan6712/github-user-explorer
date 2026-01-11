<script>
	import HomeButton from "$lib/components/smoll/HomeButton.svelte";
	import SearchBar from "$lib/components/smoll/SearchBar.svelte";
</script>

<nav class="flex justify-between flex-wrap px-5 py-3 sticky top-0 backdrop-blur-sm shadow-sm">
    <HomeButton></HomeButton>
    <SearchBar method="get" action="/"></SearchBar>
</nav>