import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzas: [],
    isLoading: true,
};

export const pizzaSlice = createSlice({
    name: "pizza",

    initialState,

    reducers: {
        setPizzas(state, {payload}) {
            state.pizzas = payload;
        },

        setIsLoading(state, {payload}) {
            state.isLoading = payload;
        },
    }
})

export const { setPizzas, setIsLoading } = pizzaSlice.actions;

export default pizzaSlice.reducer;