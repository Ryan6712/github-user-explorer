<script>
    export let follows;
</script>

<div class="follow grid grid-cols-2 w-62.5 text-center gap-3 mb-8">
    <span class="bg-white shadow-md rounded-2xl border border-(--light-green)">following <br>{follows.following}</span>
    <span class="bg-white shadow-md rounded-2xl border border-(--light-green)">followers <br>{follows.followers}</span>
  </div>