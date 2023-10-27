import { CartItemType } from "../types/typesComponent";

export const calcTotalPrice = (items: CartItemType[]) => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};