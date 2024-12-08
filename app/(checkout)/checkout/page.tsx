'use client';

import {
    CheckoutSidebar,
    Container,
    Title,
    CheckoutCart,
    CheckoutPersonalForm,
    CheckoutAddressForm
} from "@/shared/components/shared";
import {useCart} from "@/shared/hooks";
import {checkoutFormSchema, CheckoutFormValues} from "@/shared/constants";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormProvider, useForm} from "react-hook-form";
import toast from "react-hot-toast";

export default function CheckoutPage() {

    const {totalAmount, updateItemQuantity, items, removeCartItem, loading} = useCart();

    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            comment: '',
        },
    });

    const onSubmit = async (data: CheckoutFormValues) => {
        console.log(data)
    };

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    };

    return (
        <Container className="mt-10">
            <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]"/>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex gap-10">
                        <div className={'flex flex-col gap-10 flex-1 mb-20'}>
                            <CheckoutCart items={items} onClickCountButton={onClickCountButton}
                                          removeCartItem={removeCartItem}/>
                            <CheckoutPersonalForm/>
                            <CheckoutAddressForm/>
                        </div>

                        <div className="w-[450px]">
                            <CheckoutSidebar totalAmount={totalAmount}/>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </Container>
    );
}
