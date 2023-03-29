import { configureStore } from "@reduxjs/toolkit";

import livesReducer from "./livesSlice";

const store = configureStore({
    reducer: {
        lives: livesReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
