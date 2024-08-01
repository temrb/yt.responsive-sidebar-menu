import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface LayoutState {
	sidebar: boolean;
	setSidebar: (sidebar: boolean) => void;
	isLoading: boolean;
	setLoading: (loading: boolean) => void;
}

export const layoutSlice = create<LayoutState>()(
	persist(
		(set) => ({
			sidebar: false,
			setSidebar: (sidebar: boolean) => set({ sidebar }),
			isLoading: true,
			setLoading: (loading) => set({ isLoading: loading }),
		}),
		{
			name: 'layout-storage',
			storage: createJSONStorage(() => localStorage),
			onRehydrateStorage: () => {
				// This function runs when hydration starts
				return (state, error) => {
					if (error) {
						console.log(
							'an error occurred during hydration',
							error,
						);
					} else {
						console.log('hydration finished');
						state?.setLoading(false); // Set loading to false when hydration is finished
					}
				};
			},
		},
	),
);
