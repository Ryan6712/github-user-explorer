<script>
	import RepoTopics from "../smoll/RepoTopics.svelte";

    export let repos;
</script>

<div class="wrap grid grid-cols-1 md:grid-cols-2">
    {#each repos as r }
        <div class="repo-card flex flex-col gap-1 items-start min-h-20 w-90 rounded-2xl border border-(--light-green) bg-white px-5 py-1 shadow-sm hover:shadow-md mb-4">
            <h3 class="text-2xl font-semibold">{r.name}</h3>
            <p class="w-fit text-sm">{r.description ?? "no description"}</p>
            <RepoTopics topics={r.topics}></RepoTopics>
            {#if r.language != null}
            <span class="rounded-2xl border-2 border-(--light-green) bg-white px-3 text-(--light-green)">{r.language}</span>
            {/if}
        </div>
    {/each}
</div>