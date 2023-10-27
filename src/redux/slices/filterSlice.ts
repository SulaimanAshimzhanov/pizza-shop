import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { SortPropertyEnum } from "../../types/typesComponent";



export type SortType = {
    name: string;
    sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: SortType;
}


const initialState: FilterSliceState = {
    searchValue: "",
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: "популярности",
        sortProperty: SortPropertyEnum.PRICE_DESC
      }
};


const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setSort(state, action: PayloadAction<SortType>) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            if(Object.keys(action.payload).length) {
                state.currentPage = Number(action.payload.currentPage);
                state.categoryId = Number(action.payload.categoryId);
                state.sort = action.payload.sort;
            } else {
                state.categoryId = 0;
                state.currentPage = 1;
                state.sort = {
                    name: "популярности",
                    sortProperty: SortPropertyEnum.PRICE_DESC
                }
            }
        }
    }
});

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;

export const { 
    setCategoryId, 
    setSearchValue, 
    setSort, 
    setCurrentPage, 
    setFilters 
} = filterSlice.actions;

export default filterSlice.reducer;