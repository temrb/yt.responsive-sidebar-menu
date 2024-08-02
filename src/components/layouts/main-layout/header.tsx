'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/tw.utils';
import userRoutes from '@/routes/user.routes';
import { layoutSlice } from '@/zustand/features/layoutSlice';
import { PanelLeftOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
	const sidebar = layoutSlice((state) => state.sidebar);
	const setSidebar = layoutSlice((state) => state.setSidebar);
	const currentPath = usePathname();

	const currentRoute = userRoutes.find((route) => route.path === currentPath);

	const defaultStyles =
		'sticky top-0 z-40 flex h-16 w-full flex-row items-center justify-start border-b-[1px] border-muted bg-card p-4';

	return (
		<header
			className={cn(defaultStyles, !sidebar && 'space-x-0 md:space-x-2')}
		>
			<Button
				className={sidebar ? 'hidden' : 'hidden md:flex'}
				variant={'ghost'}
				size={'icon'}
				onClick={() => setSidebar(!sidebar)}
				disabled={sidebar}
			>
				<PanelLeftOpen className='size-6 md:size-[1.15rem]' />
			</Button>

			{currentRoute && (
				<h1 className='overflow-hidden truncate text-lg font-medium'>
					{currentRoute.name}
				</h1>
			)}
		</header>
	);
};

export default Header;
