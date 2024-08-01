import { Button } from '@/components/ui/button';
import { layoutSlice } from '@/zustand/features/layoutSlice';
import { PanelLeftOpen } from 'lucide-react';

const Header = () => {
	const hideSidebar = layoutSlice((state) => state.hideSidebar);
	const setHideSidebar = layoutSlice((state) => state.setHideSidebar);
	return (
		<div className='sticky top-0 z-40 flex h-16 w-full flex-row items-center justify-between space-x-4 border-b-[1px] border-muted bg-card p-4'>
			<Button
				className={hideSidebar ? 'hidden' : 'hidden md:flex'}
				variant={'ghost'}
				size={'icon'}
				onClick={() => setHideSidebar(!hideSidebar)}
				disabled={hideSidebar}
			>
				<PanelLeftOpen className='size-6' />
			</Button>
		</div>
	);
};

export default Header;
