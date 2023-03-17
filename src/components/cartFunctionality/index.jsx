import { create } from 'zustand';
import { shallow } from 'zustand/shallow';

const useProductsStore = create((set) => ({
  count: 0,
  addOne: () => set((state) => ({ count: state.count + 1 })),
  removeOne: () => set((state) => ({ count: state.count - 1 })),
  clearCount: () => set({ count: 0 }),
}));

function CartPage() {
  const { count, addOne, removeOne, clearCount } = useProductsStore(
    (state) => ({
      count: state.count,
      addOne: state.addOne,
      removeOne: state.removeOne,
      clearCount: state.clearCount,
    }),
    shallow,
  );

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={addOne}>Add</button>
      <button onClick={removeOne}>Remove</button>
      <button onClick={clearCount}>Clear</button>
    </div>
  );
}

export default CartPage;
