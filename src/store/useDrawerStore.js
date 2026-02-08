// store/useDrawerStore.js
import { create } from "zustand";

const useDrawer = create((set) => ({
    drawers: {},

    openDrawer: (name) =>
        set((state) => ({
            drawers: { ...state.drawers, [name]: true },
        })),

    closeDrawer: (name) =>
        set((state) => ({
            drawers: { ...state.drawers, [name]: false },
        })),

    toggleDrawer: (name) =>
        set((state) => ({
            drawers: { ...state.drawers, [name]: !state.drawers[name] },
        })),

    resetDrawers: () => set({ drawers: {} }), // closes all drawers
}));

export default useDrawer;