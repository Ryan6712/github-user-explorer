<script>
    export let topics;
</script>

<div class="topics gap-2 flex flex-wrap">
    {#each topics as t }
        <span class="border-2 border-(--light-green) rounded-2xl py-0.5 px-2 bg-white text-(--light-green)">{t}</span>
    {/each}
</div>