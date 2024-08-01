'use client';

import { Button } from '@/components/ui/button';
import Fader from '@/components/ui/fader';
import QuickMenu from '@/components/ui/quick-menu';
import routes from '@/routes';
import { layoutSlice } from '@/zustand/features/layoutSlice';
import { CircleHelp, PanelLeftClose } from 'lucide-react';
import SidebarChild from './sidebar-child';

const Sidebar = () => {
	const hideSidebar = layoutSlice((state) => state.hideSidebar);
	const setHideSidebar = layoutSlice((state) => state.setHideSidebar);

	const handleSignOut = () => {
		alert('Signing out...');
	};

	const handleHelp = () => {
		alert('Help...');
	};
	return (
		<div
			className={`h-full w-full flex-col-reverse md:w-52 md:flex-col md:border-r-[1px] md:border-muted lg:w-64 ${hideSidebar ? 'flex' : 'hidden'}`}
		>
			<div className='hidden items-center justify-between px-4 md:flex md:h-16'>
				<Button
					variant={'ghost'}
					size={'icon'}
					onClick={() => setHideSidebar(!hideSidebar)}
				>
					<PanelLeftClose className='size-6' />
				</Button>
			</div>
			<Fader
				direction='vertical'
				strength='md'
				className='h-full w-full overflow-y-auto overflow-x-hidden bg-background scrollbar-hide md:h-[calc(100dvh-8rem)]'
			>
				{routes.map((route, index) => (
					<SidebarChild key={index} {...route} />
				))}
			</Fader>
			<div className='flex h-16 items-center justify-between px-4'>
				<QuickMenu
					session={{
						user: {
							image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png',
						},
					}}
					items={[
						{ type: 'link', text: 'Settings', href: '/settings' },
						{
							type: 'button',
							text: 'Sign Out',
							onClick: handleSignOut,
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
