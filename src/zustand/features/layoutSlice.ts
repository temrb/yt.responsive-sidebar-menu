import { create } from 'zustand';
interface LayoutState {
	hideSidebar: boolean;
	setHideSidebar: (hideSidebar: boolean) => void;
}

export const layoutSlice = create<LayoutState>((set) => ({
	hideSidebar: false,
	setHideSidebar: (hideSidebar) => set({ hideSidebar }),
}));
