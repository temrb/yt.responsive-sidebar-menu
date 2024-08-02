'use client';

import { useMediaQuery } from '@/hooks';
import { layoutSlice } from '@/zustand/features/layoutSlice';
import Link from 'next/link';
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Button } from './button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './dropdown-menu';

type MenuItem = {
	type: 'link' | 'button';
	text: string;
	icon: React.ReactNode;
	href?: string;
	onClick?: () => void;
};

type NavMenuProps = {
	session: {
		user: {
			image?: string;
			name?: string;
		};
	};
	items: MenuItem[];
};

const NavMenu: React.FC<NavMenuProps> = ({ session, items }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { isMobile } = useMediaQuery();
	const setSidebar = layoutSlice((state) => state.setSidebar);

	const handleCloseDropdown = () => {
		if (isOpen) {
			setIsOpen(false);
		}
		if (isMobile) {
			setSidebar(false);
		}
	};
	return (
		<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
			<DropdownMenuTrigger className='cursor-pointer'>
				<Avatar className='size-7'>
					<AvatarImage
						src={session?.user?.image as string}
						referrerPolicy='no-referrer'
					/>
					<AvatarFallback>
						{session?.user?.name?.slice(0, 2)}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{items.map((item, index) => (
					<DropdownMenuItem key={index} className='cursor-pointer'>
						{item.type === 'link' ? (
							<Button
								size={'sm'}
								className='w-full cursor-pointer'
								variant={'ghost'}
								asChild
								onClick={handleCloseDropdown}
							>
								<Link
									href={item.href || '#'}
									className='flex w-full cursor-pointer items-center justify-between space-x-2'
								>
									{item.icon}
									<p className='text-xs md:text-sm'>
										{item.text}
									</p>
								</Link>
							</Button>
						) : (
							<Button
								variant={'ghost'}
								size={'sm'}
								onClick={() => {
									item.onClick?.();
									handleCloseDropdown();
								}}
							>
								<div className='flex w-full cursor-pointer items-center justify-between space-x-2'>
									{item.icon}
									<p className='text-xs md:text-sm'>
										{item.text}
									</p>
								</div>
							</Button>
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default NavMenu;
