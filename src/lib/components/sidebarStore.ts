import { writable } from 'svelte/store';

export type SidebarMode = 'full' | 'reduced' | 'icon';

interface SidebarState {
  mode: SidebarMode;
  isOpen: boolean;
}

const initialState: SidebarState = {
  mode: 'full',
  isOpen: true
};

export const sidebarStore = writable<SidebarState>(initialState);
