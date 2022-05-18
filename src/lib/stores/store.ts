import type { Item } from '$lib/models/Item';
import { writable } from 'svelte/store';

export const items = writable([]);
const itemDetails: { [id: number]: Item } = {};
let loaded = false;

const fetchItems = async () => {
	if (loaded) {
		return;
	}

	const url = 'https://fakestoreapi.com/products';

	const result = await fetch(url);
	const data = await result.json();

	const loadedItems = data.map((data: Item) => data);

	items.set(loadedItems);
	loaded = true;
};

fetchItems();

export const getItemById = async (id: number) => {
	if (itemDetails[id]) {
		return itemDetails[id];
	}

	try {
		const url = `https://fakestoreapi.com/products/${id}`;
		const result = await fetch(url);
		const item = await result.json();
		itemDetails[id] = item;

		return item;
	} catch (err) {
		return null;
	}
};
