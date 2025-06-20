import { create } from 'zustand'

// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 3,
  score: 0
  updateState: (newState ) => (set()=>({}));

}))

export { usePsyStore }