import create from "zustand";

export const useTheCart = create((set) => ({
  items: [],
  count: 0,
  addToCart: (item) =>
    set((state) => ({
      items: [...state.items, item],
      count: state.count + 1,
    })),
  removeFromCart: (index) =>
    set((state) => ({
      items: state.items.filter((_, i) => i !== index),
      count: state.count - 1,
    })),
  clearCart: () =>
    set(() => ({
      items: [],
      count: 0,
    })),
}));
