'use client';

import { layoutSlice } from '@/zustand/features/layoutSlice';
import { Home, Menu, MessageSquare, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FooterLink = ({ href, isActive, Icon, onClick }) => {
	const iconClass = 'h-7 w-7 transition-all duration-300';
	return (
		<Link
			href={href}
			className={`flex h-full w-full items-center justify-center space-x-2 ${isActive ? 'pointer-events-none bg-foreground/10' : ''}`}
			onClick={onClick}
		>
			<Icon
				className={`${iconClass} ${isActive ? 'opacity-100' : 'opacity-50'}`}
				strokeWidth={1.5}
			/>
		</Link>
	);
};

const Footer = () => {
	const pathname = usePathname();
	const { sidebar, setSidebar } = layoutSlice((state) => ({
		sidebar: state.sidebar,
		setSidebar: state.setSidebar,
	}));

	const handleSidebarToggle = () => {
		setSidebar(!sidebar);
	};

	const handleNavigation = () => {
		if (sidebar) {
			setSidebar(false);
		}
	};

	return (
		<div className='fixed bottom-0 z-30 flex h-16 w-full flex-row items-center justify-around divide-x-[1px] divide-muted border-t-[1px] border-muted bg-background md:hidden'>
			<button
				onClick={handleSidebarToggle}
				className='flex h-full w-full items-center justify-center'
			>
				{sidebar ? (
					<X
						className='h-7 w-7 text-foreground transition-all duration-300'
						strokeWidth={1}
					/>
				) : (
					<Menu
						className='h-7 w-7 cursor-pointer opacity-50 transition-all duration-300'
						strokeWidth={1}
					/>
				)}
			</button>
			<FooterLink
				href={pathname === '/dashboard' ? '#' : '/dashboard'}
				isActive={pathname === '/dashboard'}
				Icon={Home}
				onClick={handleNavigation}
			/>
			<FooterLink
				href={pathname === '/chat' ? '#' : '/chat'}
				isActive={pathname === '/chat'}
				Icon={MessageSquare}
				onClick={handleNavigation}
			/>
		</div>
	);
};

export default Footer;
