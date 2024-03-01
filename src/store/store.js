import { create } from "zustand";

// Typing for TS
// type CardStore = {
//   cardId: number
//   assignId: () => void
// }

export const useCardStore = create((set) => ({
  cardId: 0,
  assignId: (id) => {
    set(() => ({ cardId: id }));
  }
}))