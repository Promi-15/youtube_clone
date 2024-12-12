import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
export const usePopupStore = create((set) => ({
  isPopupVisible: false,
  togglePopup: () =>
    set((state) => ({
      isPopupVisible: !state.isPopupVisible,
    })),
}));