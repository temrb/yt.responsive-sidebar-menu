'use client';

import { Button } from '@/components/ui/button';
import Fader from '@/components/ui/fader';
import NavMenu from '@/components/ui/nav-menu';
import routes from '@/routes';
import { layoutSlice } from '@/zustand/features/layoutSlice';
import { CircleHelp, Cog, LogOut, PanelLeftClose } from 'lucide-react';
import SidebarItem from './sidebar-item';

const Sidebar = () => {
	const sidebar = layoutSlice((state) => state.sidebar);
	const setSidebar = layoutSlice((state) => state.setSidebar);

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
			<div className='hidden items-center justify-between px-4 md:flex md:h-16'>
				<Button
					variant={'ghost'}
					size={'icon'}
					onClick={() => setSidebar(!sidebar)}
				>
					<PanelLeftClose className='size-6 md:size-[1.15rem]' />
				</Button>
			</div>
			<Fader
				direction='vertical'
				strength='xs'
				className='h-full w-full space-y-1 overflow-y-auto overflow-x-hidden bg-background px-4 scrollbar-hide md:h-[calc(100dvh-8rem)]'
			>
				{routes.map((route, index) => (
					<SidebarItem key={index} {...route} />
				))}
			</Fader>
			<div className='flex h-16 items-center justify-between px-4'>
				<NavMenu
					session={{
						user: {
							image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png',
							name: 'Walter White',
						},
					}}
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
