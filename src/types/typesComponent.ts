
export type CartItemType = {
    id: string;
    name: string;
    price: number;
    type: string;
    size: number;
    count: number;
    imageUrl: string;
};

export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error"
};

export type SearchPizzaParams = {
    order: string;
    sortBy: string;
    category: string;
    search: string;
    currentPage: string;
};

export enum SortPropertyEnum {
    RATING_DESC = "rating",
    RATING_ASC = "-rating",
    TITLE_DESC = "title",
    TITLE_ASC = "-title",
    PRICE_DESC = "price",
    PRICE_ASC = "-price",
};

