'use client';

import PageLoading from '@/components/ui/loading/page-loading';
import { layoutSlice } from '@/zustand/features/layoutSlice';
import Content from './content';
import Footer from './footer';
import Sidebar from './sidebar/sidebar';

interface LayoutProps {
	children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
	const isLoading = layoutSlice((state) => state.isLoading);

	return (
		<main className='relative flex h-[calc(100dvh-4rem)] max-w-full flex-1 flex-row overflow-hidden md:h-full'>
			{isLoading ? (
				<PageLoading />
			) : (
				<>
					<Sidebar />
					<Content>{children}</Content>
					<Footer />
				</>
			)}
		</main>
	);
};

export default MainLayout;
