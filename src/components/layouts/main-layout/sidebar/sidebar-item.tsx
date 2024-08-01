'use client';
import { useMediaQuery } from '@/hooks';
import { cn } from '@/lib/utils/tw.utils';
import { Route } from '@/types/route';
import { layoutSlice } from '@/zustand/features/layoutSlice';
import { CircleDashed } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarItem = (props: Route) => {
	const { path, name, soon, description } = props;
	const currentPath = usePathname();
	const setSidebar = layoutSlice((state) => state.setSidebar);
	const defaultStyles =
		'flex w-full items-center justify-start px-3 py-1 text-sm font-medium text-muted rounded-sm';
	const { isTabletOrSmaller } = useMediaQuery();

	const handleSidebarClose = () => {
		if (isTabletOrSmaller) {
			setSidebar(false);
		}
	};

	return (
		<Link
			className={cn(
				defaultStyles,
				soon
					? 'pointer-events-none opacity-70'
					: 'hover:bg-foreground hover:text-background',
				currentPath === path &&
					'bg-foreground text-background md:pointer-events-none',
			)}
			href={!soon ? path : '#'}
			onClick={handleSidebarClose}
		>
			<h1 className='text-overflow w-full truncate'>{name}</h1>
			{soon && <CircleDashed className='ml-2 size-4 text-muted' />}
		</Link>
	);
};

export default SidebarItem;
