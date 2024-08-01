import Content from './content';
import Footer from './footer';
import Sidebar from './sidebar/sidebar';

interface LayoutProps {
	children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
	return (
		<main className='relative flex h-[calc(100dvh-4rem)] max-w-full flex-1 flex-row overflow-hidden md:h-full'>
			<Sidebar />
			<Content>{children}</Content>
			<Footer />
		</main>
	);
};

export default MainLayout;
