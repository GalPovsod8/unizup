import type { PageLoad } from './$types';

interface newsTestData {
	noivcaNaslov: string;
	novicaLink: string;
	tag: string;
	imgSrc: string;
	avtor: string;
	datum: string;
	besedilo: string;
}

let testNews: newsTestData[] = [
	{
		noivcaNaslov: 'Smučanje z UNIZUP',
		novicaLink: 'smucanje-z-unizup',
		tag: 'Dogodek',
		imgSrc: 'http://unizup.si/wp-content/uploads/2024/01/IMG_3978.jpg',
		avtor: 'Primož Lorbek',
		datum: '17.1.2024',
		besedilo:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
	},
	{
		noivcaNaslov: 'Božična poslanica 2023',
		novicaLink: 'bozicna-poslanica-2023',
		tag: 'Duhovno',
		imgSrc: 'http://unizup.si/wp-content/uploads/2023/12/Gaza-1-600x400.jpg',
		avtor: 'Primož Lorbek',
		datum: '27.12.2023',
		besedilo:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
	},
	{
		noivcaNaslov: 'Človekovo dostojanstvo',
		novicaLink: 'clovekovo-dostojanstvo',
		tag: 'Novica',
		imgSrc:
			'http://unizup.si/wp-content/uploads/2024/01/311336193_833078238057361_2655733340416960969_n-1080x710.jpg',
		avtor: 'Primož Lorbek',
		datum: '17.1.2024',
		besedilo:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
	},
	{
		noivcaNaslov: 'Adventno romanje mladih v Celovec',
		novicaLink: 'adventno-romanje-mladih-v-celovec',
		tag: 'Novica',
		imgSrc:
			'http://unizup.si/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-15-at-12.48.58-600x400.jpeg',
		avtor: 'Primož Lorbek',
		datum: '5.12.2023',
		besedilo:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
	},
	{
		noivcaNaslov: 'Nikodemovi večeri 2023',
		novicaLink: 'nikodemovi-veceri-2023',
		tag: 'Novica',
		imgSrc:
			'http://unizup.si/wp-content/uploads/2023/12/72228515559__FA17F13D-EB38-4E93-BA29-8E2622FFAC68-600x400.jpeg',
		avtor: 'Primož Lorbek',
		datum: '2.12.2023',
		besedilo:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
	},
	{
		noivcaNaslov: 'Adventna duhovna obnova',
		novicaLink: 'adventna-duhovna-obnova',
		tag: 'Novica',
		imgSrc:
			'http://unizup.si/wp-content/uploads/2023/11/Dusty-Purple-Cut-Out-Advent-Candle-Instagram-Post-600x400.jpg',
		avtor: 'Primož Lorbek',
		datum: '29.11.2023',
		besedilo:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
	},
	{
		noivcaNaslov: '2. srečanje medicinske skupine',
		novicaLink: '2-srecanje-medicinske-skupine',
		tag: 'Novica',
		imgSrc: 'http://unizup.si/wp-content/uploads/2023/11/IMG_20231116_201716-600x400.jpg',
		avtor: 'Primož Lorbek',
		datum: '20.11.2023',
		besedilo:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
	}
];

export const load: PageLoad = async ({ fetch }) => {
	// const getNews = async () => {
	// 	const res = await fetch('');
	// 	const newsData = await res.json();
	// 	return newsData;
	// };

	return {
		// newsData: getNews()
		novice: testNews
	};
};
