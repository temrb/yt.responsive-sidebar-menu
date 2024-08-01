import Link from 'next/link';
import React from 'react';
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
	href?: string;
	onClick?: () => void;
};

type QuickMenuProps = {
	session: {
		user: {
			image?: string;
			name?: string;
		};
	};
	items: MenuItem[];
};

const QuickMenu: React.FC<QuickMenuProps> = ({ session, items }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='cursor-context-menu'>
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
							>
								<Link
									href={item.href || '#'}
									className='w-full cursor-pointer'
								>
									{item.text}
								</Link>
							</Button>
						) : (
							<Button
								variant={'ghost'}
								size={'sm'}
								onClick={item.onClick}
								className='w-full cursor-pointer'
							>
								{item.text}
							</Button>
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default QuickMenu;
