import axios from "axios";
import { RootState } from "../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchPizzaParams, Status } from "../../types/typesComponent";


type Pizza = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
};

interface PizzaSliceState {
    items: Pizza[];
    status: Status
};

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'pizza/fetchPizzasStatus', async (params) => {
    const {
        order,
        sortBy,
        category,
        search,
        currentPage
      } = params;

    const { data } = await axios.get<Pizza[]>(
        `https://650c68f347af3fd22f67961c.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

      return data;
    }
);


const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING
};


const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setData(state, action: PayloadAction<Pizza[]>) {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    }
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setData } = pizzaSlice.actions;

export default pizzaSlice.reducer;