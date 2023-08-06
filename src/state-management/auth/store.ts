import { create } from "zustand";

interface AuthStore {
  user: string;
  login: (user: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => {
  return {
    user: "",
    login: (user: string) => set(() => ({ user: user })),
    logout: () => set(() => ({ user: "" })),
  };
});

export default useAuthStore;
