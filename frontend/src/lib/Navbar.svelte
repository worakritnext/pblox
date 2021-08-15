<script lang="ts">
	import user from './user';
	let q = '';
	export let posts = [];
	import Fuse from 'fuse.js';
	import { resultSearch } from './dataStore';
	const fuse = new Fuse(posts, { keys: ['title', 'content'] });
	$: $resultSearch = q ? fuse.search(q).map((x) => x.item) : posts;
</script>

<nav class="bg-white border-b border-gray-500 py-2 px-4 w-full">
	<div class="flex items-center justify-between container mx-auto">
		<a href="/">PBOX</a>

		<input
			class="outline-none"
			type="search"
			name="search"
			id="search"
			placeholder="พิมพ์ คำ ค้นหาที่นี่"
			bind:value={q}
		/>
		<section>
			{#if !$user}
				<a href="/login" class="font-mono no-underline">เข้าใช้งาน</a>
			{:else}
				<a href="/new" class="font-mono no-underline mr-3">เพิ่ม</a>
				<span class="font-mono text-gray-500">{$user.username}</span>
			{/if}
		</section>
	</div>
</nav>
