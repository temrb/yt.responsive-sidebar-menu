import { Route } from '@/types/route';

const routes: Route[] = [
	{
		path: '/feature1',
		name: 'Feature 1',
		description: 'This is the first feature',
	},
	{
		path: '/feature2',
		name: 'Feature 2',
		description: 'This is the second feature',
		soon: true,
	},
];

export default routes;
