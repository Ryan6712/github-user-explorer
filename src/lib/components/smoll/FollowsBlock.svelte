<script>
    export let follows;
</script>

<div class="follow grid grid-cols-2 w-62.5 text-center gap-3 mb-8">
    <span class="bg-(--green) rounded-2xl text-gray-300 border border-(--dark-green)">following <br>{follows.following}</span>
    <span class="bg-(--green) rounded-2xl text-gray-300 border border-(--dark-green)">followers <br>{follows.followers}</span>
  </div>