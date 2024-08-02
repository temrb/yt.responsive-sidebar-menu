// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

interface SettingsItemProps {
	type: 'link' | 'button' | 'component';
	text: string;
	icon?: React.ReactNode;
	href?: string;
	onClick?: () => void;
	component?: React.ReactNode;
}

const SettingsItem = (props: SettingsItemProps) => {
	const { type, text, icon, href, onClick, component } = props;

	return <div className='h-full w-full'></div>;
};

export default SettingsItem;
