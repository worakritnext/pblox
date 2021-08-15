<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/posts');
		const data = await res.json();

		return { props: { posts: data } };
	};
</script>
<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import Navbar from '$lib/Navbar.svelte';
	export let posts=[]
	let loading = false;
</script>

<Navbar {posts}/>
<slot />
