import  {create} from "zustand"

type HomeStore = {
    count: number
    increment: () => void
    decrement: () => void
}

export const useHomeStore = create<HomeStore>((set) => ({
    count: 0,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1}))
}));
