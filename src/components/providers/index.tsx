import { Toaster } from '@/components/ui/sonner';
import { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';

const Providers = async ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='dark'
			enableSystem
			disableTransitionOnChange
		>
			{children}
			<Toaster />
		</ThemeProvider>
	);
};

export default Providers;
