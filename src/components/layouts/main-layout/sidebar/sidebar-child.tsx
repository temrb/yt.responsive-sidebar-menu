import { cn } from '@/lib/utils/tw.utils';
import { Route } from '@/types/route';
import Link from 'next/link';

const SidebarChild = (props: Route) => {
	const { path, name, soon, description } = props;

	const defaultLinkStyle = 'p-4 hover:bg-primary hover:text-background';
	return (
		<Link
			className={cn(
				defaultLinkStyle,
				'flex w-full items-center justify-start',
			)}
			href={soon ? '#' : path}
		>
			<h1>{name}</h1>
		</Link>
	);
};

export default SidebarChild;
