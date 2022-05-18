export interface Item {
	id: number;
	title: string;
	image: string;
	price: number;
	category: string;
	description: string;
}

export const generateMockItem = (
	id: number,
	title: string,
	image: string,
	price: number,
	category: string,
	description: string
): Item => ({
	id,
	title,
	image,
	price,
	category,
	description
});
