import { create } from "zustand";

const useStore = create((set) => ({
  view: "Check detailed Evaluation", // initial state
  onClick: () =>
    set((state) => ({
      view:
        state.view === "Check detailed Evaluation"
          ? "Expand and view your file"
          : "Check detailed Evaluation",
    })),
}));

export default useStore;
