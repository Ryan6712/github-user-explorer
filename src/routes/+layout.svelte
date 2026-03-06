<script>
	import { navigating } from '$app/stores';
	import Loading from '$lib/components/big/Loading.svelte';
	import Navbar from '$lib/components/big/Navbar.svelte';
	import './layout.css';

	const { children } = $props();

	
</script>

{#if $navigating}
	<Loading></Loading>
{/if}

<Navbar></Navbar>
<div class="container mx-auto  my-7">
	{@render children()}
</div>

