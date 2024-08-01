import MainLayout from '@/components/layouts/main-layout/main-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'USER ROUTES',
	description: 'Generated by create next app',
};

export default function UserLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <MainLayout>{children}</MainLayout>;
}