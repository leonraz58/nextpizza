import {axiosInstance} from "@/shared/services/instance";
import {CartDTO} from "@/shared/services/dto/cart.dto";

export const getCart = async (): Promise<CartDTO> => {
    return (await axiosInstance.get<CartDTO>('/cart')).data;
};

export const updateItemQuantity = async (itemId: number, quantity: number): Promise<CartDTO> => {
    return (await axiosInstance.patch<CartDTO>('/cart/' + itemId, { quantity })).data;
};