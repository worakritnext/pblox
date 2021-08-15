<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import Navbar from '$lib/Navbar.svelte';

	let loading = false;

	
</script>

	<Navbar />
	<slot />
