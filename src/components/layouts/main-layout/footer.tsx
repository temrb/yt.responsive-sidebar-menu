'use client';

import { layoutSlice } from '@/zustand/features/layoutSlice';
import { Home, Menu, Settings, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
	const pathname = usePathname();
	const sidebar = layoutSlice((state) => state.sidebar);
	const setSidebar = layoutSlice((state) => state.setSidebar);

	const handleSidebarToggle = () => {
		setSidebar(!sidebar);
	};

	const handleNavigation = () => {
		if (sidebar) {
			setSidebar(false);
		}
	};

	const iconClass = 'h-7 w-7 transition-all duration-300';

	return (
		<div className='fixed bottom-0 z-30 flex h-16 w-full flex-row items-center justify-around divide-x-[1px] divide-muted border-t-[1px] border-muted bg-background md:hidden'>
			<button
				onClick={handleSidebarToggle}
				className='flex h-full w-full items-center justify-center'
			>
				{sidebar ? (
					<X
						className={`${iconClass} text-bgAccentDark dark:text-bgAccentLight`}
						strokeWidth={1}
					/>
				) : (
					<Menu
						className={`${iconClass} cursor-pointer opacity-50`}
						strokeWidth={1}
					/>
				)}
			</button>
			<Link
				href={pathname === '/' ? '#' : '/'}
				className={`flex h-full w-full items-center justify-center space-x-2 ${pathname === '/' ? 'pointer-events-none bg-foreground/10' : ''}`}
				onClick={handleNavigation}
			>
				<Home
					className={`${iconClass} ${pathname === '/' ? 'opacity-100' : 'opacity-50'}`}
					strokeWidth={1.5}
				/>
			</Link>
			<Link
				href={pathname === '/settings' ? '#' : '/settings'}
				className={`flex h-full w-full items-center justify-center space-x-2 ${pathname === '/settings' ? 'pointer-events-none bg-foreground/10' : ''}`}
				onClick={handleNavigation}
			>
				<Settings
					className={`${iconClass} ${pathname === '/settings' ? 'opacity-100' : 'opacity-50'}`}
					strokeWidth={1.5}
				/>
			</Link>
		</div>
	);
};

export default Footer;
