<script>
    export let method;
    export let action;
</script>

<form class="flex rounded-2xl shadow-md h-8 overflow-hidden " method={method} action={action}>
    <input type="text" placeholder="Search..." name="q" autocomplete="off" class=" bg-white mx-0 py-1.5 px-4 focus:ring-0 border-none">
    <button type="submit" class="bg-dark-khaki-600 px-3 py-0.5 mx-0 border-transparent text-white-smoke-50  hover:bg-dusty-olive-500">
        search
    </button>
</form>

