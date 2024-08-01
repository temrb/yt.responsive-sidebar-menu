import Providers from '@/components/providers';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';

const hubot = localFont({
	src: '../../public/assets/fonts/Hubot-Sans.woff2',
	variable: '--font-hubot',
	display: 'swap',
	// weight: '',
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${hubot.className} h-[calc(100dvh)] w-full bg-background text-foreground antialiased`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
