import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const livesSlice = createSlice({
    name: "lives",
    initialState: {
        lives: 3,
    },
    reducers: {
        addLives(state, action: PayloadAction<boolean>) {
            if (action.payload === true) {
                state.lives = state.lives + 1;
            }
        },
        removeLives(state, action: PayloadAction<boolean>) {
            if (action.payload === false) {
                if (state.lives > 0) {
                    state.lives = state.lives - 1;
                } else {
                    state.lives = 0
                }
                
            }
        },
    },
});

export const { addLives, removeLives } = livesSlice.actions;

export default livesSlice.reducer;
