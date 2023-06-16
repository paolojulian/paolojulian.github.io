import create from "zustand";

interface ISearchStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  keyword: string;
}

const useSearchStore = create<ISearchStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen })),
  keyword: ''
}));

export default useSearchStore;