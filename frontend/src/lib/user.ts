import { browser } from '$app/env';
import { writable } from 'svelte/store';
import type { User } from './types';

const user = writable<User | null>(null);
export default user
if (browser) {
    user.set(JSON.parse(localStorage.getItem('user')) || null)
    user.subscribe((v) => {
        localStorage.setItem('user', JSON.stringify(v))
    })

}

