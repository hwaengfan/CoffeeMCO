interface MenuItem {
	name: string;
	image: string;
}

const menu: Array<MenuItem> = [
	{
		name: 'Cold Brew',
		image: '/images/cold-brew.jpg',
	},
	{
		name: 'Loose Leaf Tea',
		image: '/images/loose-leaf-tea.jpg',
	},
	{
		name: 'Mason Latte',
		image: '/images/mason-latte.jpg',
	},
	{
		name: 'Iced Latte with Almond Milk',
		image: '/images/iced-latte-with-almond-milk.jpg',
	},
	{
		name: 'Brisket Burrito',
		image: '/images/brisket-burrito.jpg',
	},
	{
		name: 'Hojicha Latte',
		image: '/images/hojicha-latte.jpg',
	},
	{
		name: 'Brioche French Toast',
		image: '/images/brioche-french-toast.jpg',
	},
	{
		name: 'Grilled Cheese',
		image: '/images/grilled-cheese.jpg',
	},
	{
		name: 'Breakfast Potatoes',
		image: '/images/breakfast-potatoes.jpg',
	},
	{
		name: 'Matcha Latte',
		image: '/images/matcha-latte.jpg',
	},
];

export default menu;
