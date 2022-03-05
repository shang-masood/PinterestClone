import { createSlice } from '@reduxjs/toolkit';
const initialboard = {
    board:["saved","all pins"],saved:[],
    
}
const Slice = createSlice({
  name: 'adding',
  initialState:initialboard,
  reducers: {
    add(state, action) {
      state.board.push(action.payload);
    },
    addsaved(state,action)
    {
      state.saved.push(action.payload);
    },
    removeBoard(state, action){
        state.board= state.board.filter(board => board.text !== action.payload)
    },
  
  },
});

export const AddEvent = Slice.actions;

export default Slice.reducer;