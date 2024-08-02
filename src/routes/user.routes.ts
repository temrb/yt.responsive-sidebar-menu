import { Route } from '@/types/route';

const userRoutes: Route[] = [
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
	{
		path: '/settings',
		name: 'Settings',
		description: 'This is the settings page',
		ancillary: true,
	},
];

export default userRoutes;
