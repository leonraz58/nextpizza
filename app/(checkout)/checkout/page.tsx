'use client';

import {
    CheckoutSidebar,
    Container,
    Title,
    CheckoutCart,
    CheckoutPersonalForm
} from "@/shared/components/shared";
import {useCart} from "@/shared/hooks";
import {CheckoutAddressForm} from "@/shared/components/shared/checkout/checkout-address-form";

export default function CheckoutPage() {

    const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart();

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    };

    return (
        <Container className="mt-10">
            <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]"/>
            <div className="flex gap-10">
                <div className={'flex flex-col gap-10 flex-1 mb-20'}>
                    <CheckoutCart items={items} onClickCountButton={onClickCountButton} removeCartItem={removeCartItem}/>
                    <CheckoutPersonalForm/>
                    <CheckoutAddressForm/>
                </div>

                <div className="w-[450px]">
                    <CheckoutSidebar totalAmount={totalAmount} />
                </div>
            </div>
        </Container>
    );
}
