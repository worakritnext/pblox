import type { EndpointOutput } from '@sveltejs/kit';
const API = import.meta.env.VITE_API
export async function get(): Promise<EndpointOutput> {
	const res = await fetch(API+'/posts');
	const data = await res.json();

	return { body: data };
}
