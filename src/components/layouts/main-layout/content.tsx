'use client';

import { layoutSlice } from '@/zustand/features/layoutSlice';
import Header from './header';

interface LayoutProps {
	children: React.ReactNode;
}

const Content = ({ children }: LayoutProps) => {
	const sidebar = layoutSlice((state) => state.sidebar);
	return (
		<div
			className={`w-full flex-col md:flex md:h-full ${sidebar ? 'hidden' : 'flex'}`}
		>
			<Header />
			<section className='flex h-[calc(100dvh-8rem)] w-full overflow-y-auto overflow-x-hidden md:h-[calc(100dvh-4rem)]'>
				{children}
			</section>
		</div>
	);
};

export default Content;
