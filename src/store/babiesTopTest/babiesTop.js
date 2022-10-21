import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const babiesTop = createSlice({
  name: 'BABIES',
  initialState,
  reducers: {
    updateBabie: (state, action) => {
      const itemID = state.map((items) => items.babieID).indexOf(action.payload.babieID);
      if (itemID >= 0) {
        state[itemID] = { ...state[itemID], likes: state[itemID].likes + 1 };
      } else {
        state.push(action.payload);
      }
    },
  },
});
export const { updateBabie } = babiesTop.actions;
export default babiesTop.reducer;
