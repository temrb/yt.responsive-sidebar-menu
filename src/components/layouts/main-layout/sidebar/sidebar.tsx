'use client';

import { Button } from '@/components/ui/button';
import NavMenu from '@/components/ui/nav-menu';
import { cn } from '@/lib/utils/tw.utils';
import userRoutes from '@/routes/user.routes';
import { layoutSlice } from '@/zustand/features/layoutSlice';
import { CircleHelp, Cog, Home, LogOut, PanelLeftClose } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SidebarItem from './sidebar-item';

const testSession = {
	user: {
		image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png',
		name: 'Walter White',
	},
};

const Sidebar = () => {
	const sidebar = layoutSlice((state) => state.sidebar);
	const setSidebar = layoutSlice((state) => state.setSidebar);
	const currentPath = usePathname();

	const handleSignOut = () => {
		alert('Signing out...');
	};

	const handleHelp = () => {
		alert('Help...');
	};
	return (
		<div
			className={`h-full w-full flex-col-reverse md:w-52 md:flex-col md:border-r-[1px] md:border-muted lg:w-64 ${sidebar ? 'flex' : 'hidden'}`}
		>
			{/* header */}
			<div className='hidden items-center justify-between px-4 md:flex md:h-16'>
				<Button
					variant={'ghost'}
					size={'icon'}
					onClick={() => setSidebar(!sidebar)}
				>
					<PanelLeftClose className='size-6 md:size-[1.15rem]' />
				</Button>
				<Button
					variant={
						currentPath === '/dashboard' ? 'secondary' : 'ghost'
					}
					size={'icon'}
					className={cn(
						'hidden md:flex',
						currentPath === '/dashboard' &&
							'pointer-events-none opacity-50',
					)}
					asChild
					disabled={currentPath === '/dashboard'}
				>
					<Link href='/dashboard'>
						<Home className='size-6 md:size-[1.15rem]' />
					</Link>
				</Button>
			</div>

			{/* sidebar items */}
			<div className='h-full w-full overflow-y-auto overflow-x-hidden bg-background scrollbar-hide md:h-[calc(100dvh-8rem)] md:space-y-1 md:px-4'>
				{userRoutes
					.filter((route) => !route.ancillary)
					.map((route, index) => (
						<SidebarItem key={index} {...route} />
					))}
			</div>

			{/* footer */}
			<div className='flex h-16 items-center justify-between px-4'>
				<NavMenu
					session={testSession}
					items={[
						{
							type: 'link',
							text: 'Settings',
							href: '/settings',
							icon: <Cog className='size-5 md:size-[1.15rem]' />,
						},
						{
							type: 'button',
							text: 'Sign Out',
							onClick: handleSignOut,
							icon: (
								<LogOut className='size-5 md:size-[1.15rem]' />
							),
						},
					]}
				/>
				<Button variant={'ghost'} size={'icon'} onClick={handleHelp}>
					<CircleHelp className='size-6 md:size-[1.15rem]' />
				</Button>
			</div>
		</div>
	);
};

export default Sidebar;
